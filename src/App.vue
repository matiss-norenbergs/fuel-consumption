<script setup>
    import { ref, onMounted } from "vue"

    import { consumptionColumns as columns, consumptionData } from "./helpers/constants.js"
    import { getFuelData, saveFuelDataList, roundPrice } from "./helpers/fuelHelper.js"

    import Header from "./components/Header.vue"
    import Footer from "./components/Footer.vue"
    import Table from "./components/Table.vue"
    import ButtonGroup from "./components/ButtonGroup.vue"
    import Button from "./components/Button.vue"
    import Modal from "./components/Modal.vue"
    import FuelForm from "./components/FuelForm.vue"

    const data = ref([])
    const isModalVisible = ref(false)
    const isActionDisabled = ref(true)
    const formElementRef = ref()
    const totalSpent = ref(0)

    onMounted(() => {
        getData()
        //saveFuelDataList(consumptionData)
    })

    function getData() {
        const fuelData = getFuelData()

        //console.log(fuelData)
        let totalSpentTemp = 0
        fuelData.map(({ priceAfterDiscount }) => {
            totalSpentTemp += priceAfterDiscount
        })

        totalSpent.value = roundPrice(totalSpentTemp)
        data.value = fuelData
    }

    function showModal() {
        isModalVisible.value = true
    }

    function closeModal(refreshData = false) {
        if (refreshData)
            getData()

        isModalVisible.value = false
    }

    function onConfirm() {
        formElementRef.value.save()
            .then(() => {
                //console.log("FORM SUCCESS")
                closeModal(true)
            })
            .catch(() => {
                //console.log("FORM ERROR")
            })
    }
</script>

<template>
    <Header title="Fuel consumption" />
    <main class="content-wrapper">
        <div class="content-inner-wrapper">
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
                    {{ totalSpent }}
                </template>
            </Table>
            <Modal
                v-show="isModalVisible"
                :visible="isModalVisible"
                title="Create record"
                @close="closeModal"
                @confirm="onConfirm"
            >
                <FuelForm ref="formElementRef" />
            </Modal>
        </div>
    </main>
    <!-- <Footer /> -->
</template>

<style scoped>
    .content-wrapper {
        overflow: hidden;
        height: 100vh;
        padding-top: var(--header-height);

        .content-inner-wrapper {
            height: 100%;
            padding: 1rem var(--side-padding);
        }
    }
</style>
