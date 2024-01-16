<script setup>
    defineProps({
        columns: {
            type: Array,
            required: true
        },
        data: Array
    })
</script>

<template>
    <table class="table-wrapper">
        <thead>
            <tr>
                <th v-for="({ name, textAlign }, index) in columns" :class="textAlign">{{ name }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data">
                <td v-for="({ field, textAlign }, index) in columns" :class="textAlign">
                    {{ item[field] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    .table-wrapper {
        width: 100%;
        background: var(--transparent);

        &, th, td {
            border-right: 1px solid var(--accent);
            border-left: 1px solid var(--accent);
            border-collapse: collapse;
        }

        th {
            border-bottom: 1px solid var(--accent);
        }

        th, td {
            padding: .4rem .8rem;
        }
    }
</style>