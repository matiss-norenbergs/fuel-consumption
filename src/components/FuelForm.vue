<script setup>
    import { ref } from "vue"

    import { fuelTypeOptions, fuelProviderOptions } from "../helpers/constants.js"
    import { saveFuelData, getDateString } from "../helpers/fuelHelper.js"

    const form = ref({
        provider: 1,
        fuelType: 1,
        amount: 0,
        price: 0,
        discount: 0,
        date: new Date().toISOString().split('T')[0]
    })

    function save() {
        return new Promise((resolve, reject) => {
            const fuelObject = {}
            const errors = []

            Object.keys(form.value).map((field, index) => {
                // if (!form.value[field])
                //     errors.push(`Error at field ${field}`)

                if (field === "date")
                    fuelObject[field] = getDateString(form.value[field])
                else
                    fuelObject[field] = form.value[field]
            })

            if (errors.length > 0) {
                alert(errors.join("\n"))
                return reject()
            }

            saveFuelData(fuelObject)

            resolve()
        })
    }

    defineExpose({
        save
    })
</script>

<template :ref>
    <form class="form-wrapper">
        <div class="form-item">
            <select
                id="provider"
                v-model="form.provider"
                required
            >
                <option
                    v-for="(fuelProviderOption, fuelProviderKey) in fuelProviderOptions"
                    v-bind:value="fuelProviderKey"
                >
                    {{ fuelProviderOption }}
                </option>
            </select>
            <label for="provider">Provider</label>
        </div>
        <div class="form-item">
            <select
                id="fuelType"
                v-model="form.fuelType"
                required
            >
                <option
                    v-for="(fuelTypeOption, fuelTypeKey) in fuelTypeOptions"
                    v-bind:value="fuelTypeKey"
                >
                    {{ fuelTypeOption }}
                </option>
            </select>
            <label for="fuelType">Fuel type</label>
        </div>
        <div class="form-item">
            <input
                id="amount"
                type="number"
                v-model="form.amount"
                min="0"
                step=".01"
                required
                title="Enter the total fuel amount"
            />
            <label for="amount">Amount (l)</label>
        </div>
        <div class="form-item">
            <input
                id="price"
                type="number"
                v-model="form.price"
                min="0"
                step=".01"
                required
            />
            <label for="price">Price (€/l)</label>
        </div>
        <div class="form-item">
            <input
                id="discount"
                type="number"
                v-model="form.discount"
                min="0"
                step=".01"
                required
            />
            <label for="discount">Discount (€/l)</label>
        </div>
        <div class="form-item">
            <input
                id="date"
                type="date"
                v-model="form.date"
                required
            />
            <label for="date">Date</label>
        </div>
    </form>
</template>

<style scoped>
    .form-wrapper {
        min-width: 100px;

        .form-item {
            display: flex;
            align-items: center;
            padding: .5rem 0;

            label {
                order: 1;
                min-width: 120px;
                font-size: var(--font-size);

                &:after {
                    content: ":";
                }
            }

            input,
            select {
                order: 2;
                width: 100%;
                margin-left: 1rem;
                padding: .5rem 1rem;
                border-radius: var(--border-radius);
                border-right: 1px solid var(--accent);
                border-bottom: 1px solid var(--accent);
                font-size: var(--font-size);
                background: var(--background-2);
                color: var(--color);

                &[required] + label:before {
                    content: "* ";
                    color: yellow;
                }
            }
        }
    }
</style>