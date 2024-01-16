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
    <div class="table-wrapper">
        <div class="table-toolbar">
            <slot name="toolbar" />
        </div>
        <table class="table-comp">
            <thead>
                <tr>
                    <th
                        v-for="({ name, textAlign, width }, index) in columns"
                        :class="textAlign"
                        :style="{ 'minWidth': width + 'px' }"
                    >
                        {{ name }}
                    </th>
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
    </div>
</template>

<style scoped>
    .table-wrapper {
        overflow: auto;

        .table-toolbar {
            margin-bottom: 1rem;
        }
        
        .table-comp {
            background: var(--transparent);
    
            &, th, td {
                border-right: 1px solid var(--accent);
                border-left: 1px solid var(--accent);
                border-collapse: collapse;
            }
    
            th {
                border-bottom: 1px solid var(--accent);
                font-weight: 600;
            }
    
            th, td {
                padding: .4rem .8rem;
            }
        }
    }
</style>