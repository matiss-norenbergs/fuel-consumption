const consumptionColumns = [
    {
        name: "Provider",
        field: "provider",
        textAlign: "text-left"
    },
    {
        name: "Fuel type",
        field: "fuelType",
        textAlign: "text-left"
    },
    {
        name: "Amount (l)",
        field: "amount",
        textAlign: "text-right"
    },
    {
        name: "Price (€/l)",
        field: "price",
        textAlign: "text-right"
    },
    {
        name: "Discount (€/l)",
        field: "discount",
        textAlign: "text-right"
    },
    {
        name: "Date",
        field: "date",
        textAlign: "text-center"
    },
    {
        name: "Total (€)",
        field: "total",
        textAlign: "text-right"
    }
]

const consumptionData = [
    { provider: "Viada", fuelType: "Diesel", amount: 41.970, price: 1.607, discount: 0.070, date: "14/01/2024", total: 67.45 },
    { provider: "Viada", fuelType: "Diesel", amount: 33.140, price: 1.587, discount: 0.035, date: "08/01/2024", total: 52.59 },
    { provider: "Viada", fuelType: "Diesel", amount: 37.920, price: 1.587, discount: 0.035, date: "03/01/2024", total: 60.18 },
    { provider: "Viada", fuelType: "Diesel", amount: 36.030, price: 1.577, discount: 0.035, date: "28/12/2023", total: 56.82 },
    { provider: "Viada", fuelType: "Diesel", amount: 36.100, price: 1.607, discount: 0.035, date: "21/12/2023", total: 58.01 },
    { provider: "Viada", fuelType: "Diesel", amount: 34.230, price: 1.587, discount: 0.070, date: "17/12/2023", total: 54.32 },
    { provider: "Viada", fuelType: "Diesel", amount: 37.150, price: 1.607, discount: 0.130, date: "13/12/2023", total: 59.70 },
    { provider: "Viada", fuelType: "Diesel", amount: 18.920, price: 1.607, discount: 0.070, date: "09/12/2023", total: 30.40 },
    { provider: "Viada", fuelType: "Diesel", amount: 31.140, price: 1.607, discount: 0.035, date: "06/12/2023", total: 50.04 },
    { provider: "Viada", fuelType: "Diesel", amount: 25.580, price: 1.632, discount: 0.070, date: "01/12/2023", total: 41.75 },
    { provider: "Viada", fuelType: "Diesel", amount: 32.260, price: 1.632, discount: 0.035, date: "22/11/2023", total: 52.65 },
    { provider: "Viada", fuelType: "Diesel", amount: 29.680, price: 1.702, discount: 0.035, date: "13/11/2023", total: 50.52 },
    { provider: "Viada", fuelType: "Diesel", amount: 37.960, price: 1.752, discount: 0.035, date: "06/11/2023", total: 66.51 },
    { provider: "Viada", fuelType: "Diesel", amount: 22.970, price: 1.752, discount: 0.035, date: "01/11/2023", total: 40.24 },
]

export {
    consumptionColumns,
    consumptionData
}