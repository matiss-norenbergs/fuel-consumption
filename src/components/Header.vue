<script setup>
    import Title from "./Title.vue"
    import MNIcon from "./icons/MNIcon.vue"
    import ThemePicker from "./ThemePicker.vue"
    import LanguagePicker from "./LanguagePicker.vue"

    defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <header class="header-wrapper">
        <div class="header-items">
            <MNIcon />
            <Title :title :level="2" />
        </div>
        <div class="header-items compact">
            <LanguagePicker />
            <ThemePicker />
        </div>
    </header>
</template>

<style scoped>
    .header-wrapper {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: var(--header-height);
        padding: 0 var(--side-padding);
        background: var(--transparent);

        .header-items {
            display: flex;
            align-items: center;
            gap: 1rem;

            &.compact {
                gap: .5rem;
            }
        }
    }
</style>