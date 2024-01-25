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
        <div class="table-content">
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
                        <td v-for="({ field, textAlign, valueGetter }, index) in columns" :class="textAlign">
                            {{ valueGetter ? valueGetter(item) : item[field] }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
    .table-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;

        .table-toolbar {
            margin-bottom: 1rem;
        }

        .table-content {
            flex: 1;
            overflow: auto;
            white-space: nowrap;
            width: 100%;

            .table-comp {
                position: relative;
                background: var(--transparent);

                thead {
                    position: sticky;
                    top: 0;
                    background: var(--background);
                    color: var(--accent);

                    tr {
                        background: var(--transparent);
                    }
                }
        
                &, th, td {
                    border-right: 1px solid var(--accent);
                    border-left: 1px solid var(--accent);
                    border-collapse: collapse;
                }
        
                th {
                    font-weight: 600;
                }
        
                th, td {
                    padding: .4rem .8rem;
                }

                tr:hover {
                    background: rgba(var(--accent-rgb), .3);
                }
            }
        }
    }
</style>