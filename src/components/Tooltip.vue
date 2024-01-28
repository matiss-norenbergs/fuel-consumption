<script setup>
    defineProps({
        text: {
            type: String
        }
    })
</script>

<template>
    <span
        class="tooltip-wrapper"
        :text
    >
        <slot></slot>
    </span>
</template>

<style scoped>
    .tooltip-wrapper {
        --tooltip-background: rgba(var(--accent-rgb), .5);

        position: relative;

        &:hover {
            &::after {
                content: attr(text);
                position: absolute;
                pointer-events: none;
                left: 50%;
                transform: translateX(-50%) translateY(30%);
                z-index: 1;
                white-space: nowrap;
                display: block;
                padding: 3px 5px;
                font-size: var(--font-size);
                border-radius: var(--border-radius);
                background: var(--tooltip-background);
            }

            &::before {
                content: " ";
                position: absolute;
                pointer-events: none;
                right: 50%;
                bottom: 0;
                transform: translateX(50%) translateY(calc(90% + 5px));
                border: solid transparent;
                height: 0;
                width: 0;
                border-width: 4px;
                border-bottom-color: var(--tooltip-background);;
            }
        }
    }
</style>