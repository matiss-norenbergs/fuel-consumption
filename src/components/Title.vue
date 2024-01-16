<script setup>
    import { h } from "vue"

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        level: {
            type: Number,
            default: 1,
            validator(value, props) {
                return [1, 2, 3, 4, 5].includes(value)
            }
        }
    })

    const Title = h(
        "h" + props.level,
        {},
        [
            props.title
        ]
    )
</script>

<template>
    <Title />
</template>

<style scoped>
    :global(h1) {
        font-weight: 700;
    }

    :global(h2) {
        font-weight: 600;
    }

    :global(h3) {
        font-weight: 500;
    }

    :global(h4) {
        font-weight: 400;
    }

    :global(h5) {
        font-weight: 300;
    }
</style>