<script setup>
    import { ref, onMounted } from "vue"

    import { consumptionColumns as columns } from "./helpers/constants.js"
    import { getFuelData, saveFuelDataList, exportFuelData, importFuelData } from "./helpers/fuelHelper.js"
    import { getTranslation } from "./helpers/translationHelper.js"

    import Header from "./components/Header.vue"
    import Footer from "./components/Footer.vue"
    import Table from "./components/Table.vue"
    import ButtonGroup from "./components/ButtonGroup.vue"
    import ButtonSpacer from "./components/ButtonSpacer.vue"
    import Button from "./components/Button.vue"
    import Modal from "./components/Modal.vue"
    import FuelForm from "./components/FuelForm.vue"
    import RightSidePanel from "./components/RightSidePanel.vue"
    import ImportJson from "./components/ImportJson.vue"
    import Tooltip from "./components/Tooltip.vue"

    const appTitleTranslation = getTranslation('appTitle')

    const data = ref([])
    const isModalVisible = ref(false)
    const isActionDisabled = ref(true)
    const formElementRef = ref()

    function getData() {
        const fuelData = getFuelData()
        
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

    function onFileImport({ fuelData }) {
        if (!fuelData || fuelData?.length === 0)
            return

        importFuelData(fuelData)
        getData()
    }

    const handleExportClick = () => exportFuelData(data.value)

    onMounted(() => {
        document.title = appTitleTranslation
        getData()
    })
</script>

<template>
    <Header :title="appTitleTranslation" />
    <main class="content-wrapper">
        <div class="content-inner-wrapper">
            <Table
                :columns
                :data
            >
                <template #toolbar>
                    <div class="toolbar">
                        <div class="btns">
                            <ButtonGroup>
                                <Button
                                    type="primary"
                                    :onClick="showModal"
                                    icon="plus"
                                >
                                    {{ getTranslation("create") }}
                                </Button>
                                <Button
                                    :disabled="isActionDisabled"
                                    icon="edit"
                                >
                                    {{ getTranslation("edit") }}
                                </Button>
                                <Button
                                    :disabled="isActionDisabled"
                                    icon="trash-alt"
                                >
                                    {{ getTranslation("delete") }}
                                </Button>
                            </ButtonGroup>
                            <Button
                                :disabled="isActionDisabled"
                                icon="sync"
                            >
                                {{ getTranslation("getData") }}
                            </Button>
                        </div>
                        <ButtonGroup>
                            <Tooltip :text="getTranslation('import')">
                                <ImportJson :onImport="onFileImport" />
                            </Tooltip>
                            <Tooltip :text="getTranslation('export')">
                                <Button
                                    :onClick="handleExportClick"
                                    icon="file-export"
                                />
                            </Tooltip>
                        </ButtonGroup>
                    </div>
                </template>
            </Table>
            <Modal
                v-show="isModalVisible"
                :visible="isModalVisible"
                :title="getTranslation('createRecord')"
                @close="closeModal"
                @confirm="onConfirm"
            >
                <FuelForm ref="formElementRef" />
            </Modal>
        </div>
        <div class="right-side-panel">
            <RightSidePanel :data />
        </div>
    </main>
    <!-- <Footer /> -->
</template>

<style scoped>
    .content-wrapper {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        height: 100vh;
        padding-top: var(--header-height);

        .content-inner-wrapper {
            flex: 1;
            height: 100%;
            padding: 1rem var(--side-padding);
        }
    }

    .toolbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
