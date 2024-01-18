<script setup>
    import Title from "./Title.vue"
    import MNIcon from "./icons/MNIcon.vue"

    defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <header class="header-wrapper">
        <MNIcon />
        <Title :title :level="2" />
    </header>
</template>

<style scoped>
    .header-wrapper {
        position: fixed;
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        height: var(--header-height);
        padding: 0 var(--side-padding);
        background: var(--transparent);
    }
</style>