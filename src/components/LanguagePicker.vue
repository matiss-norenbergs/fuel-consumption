<script setup>
    defineProps({
        onClick: Function
    })
</script>

<template>
    <span :onClick>
        <FaIcon
            class="language-picker"
            icon="language"
            :fixedWidth="true"
        />
    </span>
</template>

<style scoped>
    .language-picker {
        --picker-color: rgba(var(--accent-rgb), .7);

        display: block;
        user-select: none;
        cursor: pointer;
        width: 1.2rem;
        height: 1.2rem;
        padding: .5rem;
        border-radius: 50%;
        border: 1px solid var(--picker-color);
        background: transparent;
        color: var(--picker-color);

        &:hover {
            border: 1px solid var(--accent);
            background: rgba(var(--accent-rgb), .3);
            color: var(--accent);
        }
    }
</style>