<script setup>
    import { ref } from "vue"

    import Header from "./components/Header.vue"
    import Footer from "./components/Footer.vue"
    import Table from "./components/Table.vue"
    import ButtonGroup from "./components/ButtonGroup.vue"
    import Button from "./components/Button.vue"
    import Modal from "./components/Modal.vue"

    import { consumptionColumns, consumptionData } from "./helpers/constants.js"

    const columns = ref(consumptionColumns)
    const data = ref(consumptionData)
    const isModalVisible = ref(false)
    const isActionDisabled = ref(true)

    function showModal() {
        isModalVisible.value = true
    }

    function closeModal() {
        isModalVisible.value = false
    }
</script>

<template>
    <Header title="Fuel consumption" />
    <main class="content-wrapper">
        <Table :columns :data>
            <template #toolbar>
                <ButtonGroup>
                    <Button
                        type="primary"
                        :onClick="showModal"
                        icon="plus"
                    >
                        Create
                    </Button>
                    <Button
                        :disabled="isActionDisabled"
                        icon="edit"
                    >
                        Edit
                    </Button>
                    <Button
                        :disabled="isActionDisabled"
                        icon="trash-alt"
                    >
                        Delete
                    </Button>
                </ButtonGroup>
                <Button
                    :disabled="isActionDisabled"
                    icon="sync"
                >
                    Get data
                </Button>
            </template>
        </Table>
        <Modal
            v-show="isModalVisible"
            title="Create record"
            @close="closeModal"
        />
    </main>
    <Footer />
</template>

<style scoped>
    .content-wrapper {
        min-height: 80vh;
        padding: 1rem var(--side-padding);
    }
</style>
