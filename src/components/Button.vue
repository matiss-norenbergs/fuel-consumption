<script setup>
    import { reactive, computed, useSlots } from "vue"

    const props = defineProps({
        onClick: Function,
        disabled: Boolean,
        type: {
            type: String,
            validator(value, props) {
                return ["primary"].includes(value)
            }
        },
        icon: String
    })

    const slots = useSlots()

    const isIconPadded = !!slots.default
    const isPrimary = computed(() => {
        return props.type === "primary"
    })

    const buttonStyles = reactive({
        "button-primary": isPrimary,
        "button-disabled": props.disabled
    })
</script>

<template>
    <button
        class="button-wrapper"
        :class="buttonStyles"
        :onClick
        :disabled
    >
        <FaIcon
            v-if="icon"
            :icon
            :padded="isIconPadded"
        />
        <slot></slot>
    </button>
</template>

<style scoped>
    :global(.button-wrapper) {
        --button-border: 1px;

        padding: .3rem .6rem;
        border-radius: 4px;
        font-size: var(--font-size);
        border: var(--button-border) solid transparent;
        background: var(--background-2);
        color: var(--color);

        &:not(.button-disabled):hover {
            cursor: pointer;
        }

        &.button-disabled {
            cursor: not-allowed;
            filter: brightness(80%);
        }

        &.button-primary {
            background: var(--accent);
            color: var(--background);

            &:not(.button-disabled):hover {
                filter: brightness(120%);
            }
        }

        &:not(.button-primary, .button-disabled):hover {
            border: var(--button-border) solid var(--accent);
            color: var(--accent);
        }
    }
</style>