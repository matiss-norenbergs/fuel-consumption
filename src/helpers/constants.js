const localStorageConstants = {
    MN_THEME_LIGHT: "MN_THEME_LIGHT",
    MN_FUEL_DATA: "MN_FUEL_DATA"
}

const calculateTotal = (data) => `${data.totalPrice} (${data.priceAfterDiscount})`

const consumptionColumns = [
    {
        name: "Provider",
        field: "provider",
        textAlign: "text-left",
        width: 120
    },
    {
        name: "Fuel type",
        field: "fuelType",
        textAlign: "text-left",
        width: 100
    },
    {
        name: "Amount (l)",
        field: "amount",
        textAlign: "text-right",
        width: 120
    },
    {
        name: "Price (€/l)",
        field: "price",
        textAlign: "text-right",
        width: 120
    },
    {
        name: "Discount (€/l)",
        field: "discount",
        textAlign: "text-right",
        width: 120
    },
    {
        name: "Date",
        field: "date",
        textAlign: "text-center",
        width: 160
    },
    {
        name: "Total (€)",
        field: "total",
        textAlign: "text-right",
        width: 150,
        valueGetter: calculateTotal
    }
]

export {
    localStorageConstants,
    consumptionColumns
}