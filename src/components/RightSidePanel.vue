<script setup>
    import { ref, watch, computed } from "vue"

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
    const isCollapsed = ref(false)

    const rspStyles = computed(() => ({
        "rsp-wrapper": true,
        "collapsed-content": isCollapsed.value
    }))

    function handleCollapse() {
        isCollapsed.value = !isCollapsed.value
    }

    watch(() => props.data, (currData, prevData) => {
        summary.value = getSummary(currData)
    })
</script>

<template>
    <div :class="rspStyles">
        <span
            class="collapse-btn"
            :onClick="handleCollapse"
        >
            <FaIcon
                class="collapse-icon"
                icon="caret-right"
            />
        </span>
        <section class="rsp-content">
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
                    label="Refill count"
                >
                    {{ summary?.refillCount || 0 }}
                </div>
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
                <header class="header-wrapper header-section">
                    <span>
                        <Title
                            title="Details"
                            :level="3"
                        />
                    </span>
                </header>
                <div class="detail-container">
                    <div
                        class="detail-card"
                        v-for="({
                            from,
                            to,
                            periodDiffDays,
                            refills,
                            totalSpent,
                            totalSpentDiscount,
                            amount
                        }, key) in summary?.sortedFuelData"
                    >
                        <div class="detail-header">
                            <Title
                                :title="key"
                                :level="4"
                            />
                        </div>
                        <div
                            class="prop-label"
                            label="Period"
                        >
                            {{ `${from} - ${to}` }}
                        </div>
                        <div
                            class="prop-label"
                            label="Duration"
                        >
                            {{ `${periodDiffDays} days` }}
                        </div>
                        <div
                            class="prop-label"
                            label="Refills"
                        >
                            {{ refills || 0 }}
                        </div>
                        <div
                            class="prop-label"
                            label="Before discount"
                        >
                            {{ totalSpent || 0 }} (€)
                        </div>
                        <div
                            class="prop-label"
                            label="After discount"
                        >
                            {{ totalSpentDiscount|| 0 }} (€)
                        </div>
                        <div
                            class="prop-label"
                            label="Fuel amount"
                        >
                            {{ amount || 0 }} (l)
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </div>
</template>

<style scoped>
    .rsp-wrapper {
        --border: 1px solid var(--accent);

        position: relative;
        height: 100%;
        width: 420px;
        transition: width 1s;
        white-space: nowrap;

        &.collapsed-content {
            width: 0;

            .collapse-icon {
                transform: rotate(-180deg);
            }
        }

        .collapse-btn {
            position: absolute;
            bottom: 50%;
            left: 0;
            transform: translate(-100%, -50%);
            padding: .3rem .5rem;
            border-bottom-left-radius: 50%;
            border-top-left-radius: 50%;
            border: var(--border);
            border-right: none;
            background: rgba(var(--accent-rgb), .1);
            color: var(--accent);
            transition: background .5s, color .5s;

            .collapse-icon {
                font-size: 1.2rem;
                transition: transform 1s;
            }

            &:hover {
                background: var(--accent);
                color: var(--color);
            }
        }

        .rsp-content {
            display: flex;
            flex-direction: column;
            
            height: 100%;
            width: 100%;
            padding: 1rem;
            border-left: var(--border);
            background: rgba(var(--accent-rgb), .1);
            overflow: hidden;
            transition: 1s;

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
                padding-top: 4px;
                border-bottom: var(--border);

                .prop-label {
                    display: flex;
                    justify-content: space-between;
                    padding: 4px 0;
                    background-image: linear-gradient(var(--transparent), var(--transparent));
                    background-position: 0% 100%;
                    background-repeat: no-repeat;
                    background-size: 0% 100%;
                    transition: background-size .35s;

                    &::before {
                        content: attr(label) ':';
                    }

                    &:hover {
                        background-size: 100% 100%;
                    }
                }

                .header-section {
                    margin-top: 1rem;
                }

                .detail-container {
                    display: flex;
                    flex-direction: column;
                    gap: .5rem;

                    .detail-card {
                        .detail-header {
                            padding: 4px 0;
                            font-size: 1.1rem;
                            text-align: center;
                            background: rgba(var(--accent-rgb), .2);
                        }
                    }
                }
            }
        }
    }
</style>