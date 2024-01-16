<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 1
    }
})
</script>

<template>
    <h1 :class="`title-wrapper title-level-` + level">
        {{ title }}
    </h1>
</template>

<style scoped>
    .title-wrapper {
        font-size: 1.5rem;

        .title-level-1 {
            font-weight: 700;
        }
    
        .title-level-2 {
            font-weight: 600;
        }
    
        .title-level-3 {
            font-weight: 500;
        }
    
        .title-level-4 {
            font-weight: 400;
        }
    
        .title-level-5 {
            font-weight: 300;
        }
    }
</style>