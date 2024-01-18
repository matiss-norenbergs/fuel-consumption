<script setup>
    import { ref, watch } from "vue"

    import { getSummary } from "../helpers/fuelHelper.js"

    import Title from "./Title.vue"
    import FaIcon from "./FaIcon.vue"

    const props = defineProps({
        data: {
            type: Array,
            default: []
        }
    })

    const summary = ref({})

    watch(() => props.data, (currData, prevData) => {
        //console.log("1", currData)
        summary.value = getSummary(currData)
    })
</script>

<template>
    <section class="rsp-wrapper">
        <header class="header-wrapper">
            <span>
                <FaIcon
                    icon="chart-simple"
                    padded
                />
                <Title
                    title="Summary"
                    :level="3"
                />
            </span>
            {{ summary?.dateRange }}
        </header>
        <main class="content-wrapper">
            <div
                class="prop-label"
                label="Fuel consumed"
            >
                {{ summary?.fuelConsumed || 0 }} (l)
            </div>
            <div
                class="prop-label"
                label="Total"
            >
                {{ summary?.totalSpent || 0 }} (€)
            </div>
            <div
                class="prop-label"
                label="Total after discount"
            >
                {{ summary?.totalAfterDiscount || 0 }} (€)
            </div>
            <div
                class="prop-label"
                label="Total saved"
            >
                {{ summary?.totalSaved || 0 }} (€)
            </div>
        </main>
    </section>
</template>

<style scoped>
    .rsp-wrapper {
        --border: 1px solid var(--accent);

        display: flex;
        flex-direction: column;
        width: 420px;
        height: 100%;
        padding: 1rem;
        border-left: var(--border);
        background: rgba(var(--accent-rgb), .1);

        .header-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: var(--border);

            span {
                display: flex;
                align-items: center;
                font-size: 1.1rem;
            }
        }

        .content-wrapper {
            flex: 1;
            padding-top: 1rem;
            border-bottom: var(--border);

            .prop-label {
                display: flex;
                justify-content: space-between;
                padding: 4px 0;

                &::before {
                    content: attr(label) ':';
                }

                &:hover {
                    background: var(--transparent);
                }
            }
        }
    }
</style>