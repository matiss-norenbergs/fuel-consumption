<script setup>
    import { reactive } from "vue"
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    const props = defineProps({
        icon: {
            type: String,
            required: true
        },
        padded: Boolean,
        fixedWidth: Boolean
    })

    const iconStyles = reactive({
        "icon-padded": props.padded
    })
</script>

<template>
    <FontAwesomeIcon
        :class="iconStyles"
        :icon
        :fixedWidth
    />
</template>

<style scoped>
    .icon-padded {
        margin-right: 5px;
    }
</style>