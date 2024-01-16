<script setup>
    import Title from "./Title.vue"
    import Button from "./Button.vue"

    defineProps({
        title: {
            type: String,
            required: true
        },
        cancelText: {
            type: [String, Boolean],
            default: "Cancel"
        },
        confirmText: {
            type: [String, Boolean],
            default: "Confirm"
        }
    })

    const emit = defineEmits(["close"])

    const close = () => emit("close")
</script>

<template>
    <div class="modal-backdrop">
        <div
            class="modal"
            role="dialog"
        >
            <header class="modal-header">
                <slot name="header">
                    <Title :title :level="3" />
                </slot>
                <button
                    class="button-close"
                    @click="close"
                >
                    &times;
                </button>
            </header>
            <section class="modal-body">
                <slot name="body">
                    Content!
                </slot>
            </section>
            <footer class="modal-footer">
                <Button
                    v-if="cancelText"
                    @click="close"
                >
                    {{ cancelText }}
                </Button>
                <Button
                    v-if="confirmText"
                    type="primary"
                >
                    {{ confirmText }}
                </Button>
            </footer>
        </div>
    </div>
</template>

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .modal {
        display: flex;
        flex-direction: column;
        overflow-x: auto;
        min-width: 500px;
        border-radius: 10px;
        background: var(--background);
        color: var(--color);

        .modal-header,
        .modal-footer {
            display: flex;
            padding: 15px;
        }
        
        .modal-header {
            position: relative;
            justify-content: center;
            color: var(--accent);

            .button-close {
                position: absolute;
                cursor: pointer;
                top: 0;
                right: 0;
                padding: 10px;
                border: none;
                font-size: 1.8rem;
                font-weight: bold;
                background: transparent;
                color: var(--accent);

                &:hover {
                    filter: brightness(120%);
                }
            }
        }

        .modal-body {
            position: relative;
            display: flex;
            justify-content: center;
            padding: 20px 10px;
        }

        .modal-footer {
            justify-content: flex-end;
            gap: .5rem;
        }
    }
</style>