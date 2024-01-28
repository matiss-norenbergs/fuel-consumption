<script setup>
    import { ref, onMounted } from "vue"

    import { getCurrentTheme, switchTheme } from "../helpers/themeHelper.js"

    import FaIcon from './FaIcon.vue'

    const isLightTheme = ref(false)

    function switchCurrentTheme() {
        isLightTheme.value = !isLightTheme.value
        switchTheme(isLightTheme.value)
    }

    onMounted(() => {
        isLightTheme.value = getCurrentTheme()
    })
</script>

<template>
    <span :onClick="switchCurrentTheme">
        <FaIcon
            class="theme-picker"
            :icon="isLightTheme ? 'moon' : 'sun'"
            :fixedWidth="true"
        />
    </span>
</template>

<style scoped>
    .theme-picker {
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