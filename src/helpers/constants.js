import { getTranslation } from "./translationHelper"

const localStorageConstants = {
    MN_THEME_LIGHT: "MN_THEME_LIGHT",
    MN_FUEL_DATA: "MN_FUEL_DATA",
    MN_USER_LANG: "MN_USER_LANG",
}

const calculateTotal = (data) => `${data.totalPrice} (${data.priceAfterDiscount})`

const consumptionColumns = [
    {
        name: getTranslation("provider"),
        field: "provider",
        textAlign: "text-left",
        width: 120
    },
    {
        name: getTranslation("fuelType"),
        field: "fuelType",
        textAlign: "text-left",
        width: 100
    },
    {
        name: getTranslation("amount"),
        field: "amount",
        textAlign: "text-right",
        width: 120
    },
    {
        name: getTranslation("price"),
        field: "price",
        textAlign: "text-right",
        width: 120
    },
    {
        name: getTranslation("discount"),
        field: "discount",
        textAlign: "text-right",
        width: 120
    },
    {
        name: getTranslation("date"),
        field: "date",
        textAlign: "text-center",
        width: 160
    },
    {
        name: getTranslation("total"),
        field: "total",
        textAlign: "text-right",
        width: 150,
        valueGetter: calculateTotal
    }
]

const fuelTypeOptions = {
    1: getTranslation("diesel"),
    2: getTranslation("gasoline98"),
    3: getTranslation("gasoline95"),
    4: getTranslation("gas")
}

const fuelProviderOptions = {
    1: "Viada",
    2: "Kings",
    3: "Neste"
}

export {
    localStorageConstants,
    consumptionColumns,
    fuelTypeOptions,
    fuelProviderOptions
}