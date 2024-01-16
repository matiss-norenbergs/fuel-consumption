<script setup>
    import Header from "./components/Header.vue"
    import Footer from "./components/Footer.vue"
    import Table from "./components/Table.vue"
    import { ref } from "vue"

    import { consumptionColumns, consumptionData } from "./helpers/constants.js"

    const columns = ref(consumptionColumns)
    const data = ref(consumptionData)
</script>

<template>
    <Header title="Fuel consumption" />
    <main class="content-wrapper">
        <p>Content</p>
        <Table :columns :data />
    </main>
    <Footer />
</template>

<style scoped>
    .content-wrapper {
        min-height: 80vh;
        padding: 1rem var(--side-padding);
    }

    .text-right {
        text-align: right;
    }
</style>
