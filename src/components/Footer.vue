<script setup>
    defineProps({
        text: {
            type: String,
            default: "© Matīss Norenbergs"
        }
    })
</script>

<template>
    <footer class="footer-wrapper">
        {{ text }}
    </footer>
</template>

<style scoped>
    .footer-wrapper {
        display: flex;
        justify-content: center;
        padding: 1rem var(--side-padding);
    }
</style>