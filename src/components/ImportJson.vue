<script setup>
    import { ref, onMounted } from "vue"

    import Button from "./Button.vue"

    const props = defineProps({
        onImport: {
            type: Function,
            required: true
        }
    })

    const importFileRef = ref()

    function handleImportClick() {
        importFileRef.value.click()
    }

    function handleFileChange({ target: { files } }) {
        if (files.length !== 1)
            return
    
        const fr = new FileReader()

        fr.onload = function(e) {
            const jsonData = JSON.parse(e.target.result)
            props.onImport(jsonData)
        }

        fr.readAsText(files.item(0))
    }
</script>

<template>
    <Button
        @click="handleImportClick"
        icon="file-import"
    >
        <input
            class="file-input"
            ref="importFileRef"
            type="file"
            accept=".json"
            :onChange="handleFileChange"
        />
    </Button>
</template>

<style scoped>
    .file-input {
        display: none;
    }
</style>