<template>
    <div class="button-group">
        <slot />
    </div>
</template>

<style scoped>
    .button-group {
        --border-radius: 4px;

        display: inline-block;
        margin-right: .8rem;

        :global(.button-wrapper) {
            border-radius: 0;

            :global(&:first-child) {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            :global(&:nth-child(n + 2):nth-child(n)) {
                border-left: none;
            }

            :global(&:last-child) {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
        }
    }
</style>