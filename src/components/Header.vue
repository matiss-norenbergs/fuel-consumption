<script setup>
    import { ref } from "vue"

    import { getTranslation } from "../helpers/translationHelper.js"

    import Title from "./Title.vue"
    import MNIcon from "./icons/MNIcon.vue"
    import ThemePicker from "./ThemePicker.vue"
    import LanguagePicker from "./LanguagePicker.vue"
    import Modal from "./Modal.vue"
    import SettingForm from "./SettingForm.vue"

    defineProps({
        title: {
            type: String,
            required: true
        }
    })

    const isSettingModalVisible = ref(false)

    function toggleSettingModalVisibility() {
        isSettingModalVisible.value = !isSettingModalVisible.value
    }
</script>

<template>
    <header class="header-wrapper">
        <div class="header-items">
            <MNIcon />
            <Title :title :level="2" />
        </div>
        <div class="header-items compact">
            <LanguagePicker :onClick="toggleSettingModalVisibility" />
            <ThemePicker />
        </div>
    </header>
    <Modal
        v-show="isSettingModalVisible"
        :visible="isSettingModalVisible"
        :title="getTranslation('language')"
        :cancelText="false"
        :confirmText="false"
        @close="toggleSettingModalVisibility"
    >
        <SettingForm />
    </Modal>
</template>

<style scoped>
    .header-wrapper {
        position: sticky;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: var(--header-height);
        padding: 0 var(--side-padding);
        background: var(--transparent);

        .header-items {
            display: flex;
            align-items: center;
            gap: 1rem;

            &.compact {
                gap: .5rem;
            }
        }
    }
</style>