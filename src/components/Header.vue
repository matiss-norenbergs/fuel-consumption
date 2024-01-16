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
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem var(--side-padding);
    }
</style>