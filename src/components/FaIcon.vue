<script setup>
    import { reactive } from "vue"
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    const props = defineProps({
        icon: {
            type: String,
            required: true
        },
        padded: Boolean
    })

    const iconStyles = reactive({
        "icon-padded": props.padded
    })
</script>

<template>
    <FontAwesomeIcon
        :class="iconStyles"
        :icon
    />
</template>

<style scoped>
    .icon-padded {
        margin-right: 5px;
    }
</style>