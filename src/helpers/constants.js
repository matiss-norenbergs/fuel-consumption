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
        width: 150
    },
    {
        name: "Total (€)",
        field: "total",
        textAlign: "text-right",
        width: 120,
        valueGetter: calculateTotal
    }
]

const consumptionData = [
    {
        "_id": 1,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 41.97,
        "price": 1.607,
        "discount": 0.07,
        "date": "14/01/2024"
    },
    {
        "_id": 2,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 33.14,
        "price": 1.587,
        "discount": 0.035,
        "date": "08/01/2024"
    },
    {
        "_id": 3,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 37.92,
        "price": 1.587,
        "discount": 0.035,
        "date": "03/01/2024"
    },
    {
        "_id": 4,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 36.03,
        "price": 1.577,
        "discount": 0.035,
        "date": "28/12/2023"
    },
    {
        "_id": 5,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 36.1,
        "price": 1.607,
        "discount": 0.035,
        "date": "21/12/2023"
    },
    {
        "_id": 6,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 34.23,
        "price": 1.587,
        "discount": 0.07,
        "date": "17/12/2023"
    },
    {
        "_id": 7,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 37.15,
        "price": 1.607,
        "discount": 0.13,
        "date": "13/12/2023"
    },
    {
        "_id": 8,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 18.92,
        "price": 1.607,
        "discount": 0.07,
        "date": "09/12/2023"
    },
    {
        "_id": 9,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 31.14,
        "price": 1.607,
        "discount": 0.035,
        "date": "06/12/2023"
    },
    {
        "_id": 10,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 25.58,
        "price": 1.632,
        "discount": 0.07,
        "date": "01/12/2023"
    },
    {
        "_id": 11,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 32.26,
        "price": 1.632,
        "discount": 0.035,
        "date": "22/11/2023"
    },
    {
        "_id": 12,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 29.68,
        "price": 1.702,
        "discount": 0.035,
        "date": "13/11/2023"
    },
    {
        "_id": 13,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 37.96,
        "price": 1.752,
        "discount": 0.035,
        "date": "06/11/2023"
    },
    {
        "_id": 14,
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 22.97,
        "price": 1.752,
        "discount": 0.035,
        "date": "01/11/2023"
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 28.83,
        "price": 1.752,
        "discount": 0.035,
        "date": "26/10/2023",
        "_id": 15
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 34.26,
        "price": 1.752,
        "discount": 0.035,
        "date": "18/10/2023",
        "_id": 16
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 34.39,
        "price": 1.752,
        "discount": 0.035,
        "date": "12/10/2023",
        "_id": 17
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 17.24,
        "price": 1.752,
        "discount": 0.035,
        "date": "09/10/2023",
        "_id": 18
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 22.88,
        "price": 1.762,
        "discount": 0.035,
        "date": "04/10/2023",
        "_id": 19
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 40.06,
        "price": 1.762,
        "discount": 0.035,
        "date": "28/09/2023",
        "_id": 20
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 34.38,
        "price": 1.752,
        "discount": 0.035,
        "date": "21/09/2023",
        "_id": 23
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 36.34,
        "price": 1.742,
        "discount": 0.035,
        "date": "14/09/2023",
        "_id": 22
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 17.58,
        "price": 1.722,
        "discount": 0.035,
        "date": "12/09/2023",
        "_id": 21
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 40.03,
        "price": 1.692,
        "discount": 0.035,
        "date": "05/09/2023",
        "_id": 24
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 35.96,
        "price": 1.682,
        "discount": 0.025,
        "date": "29/08/2023",
        "_id": 25
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 36,
        "price": 1.672,
        "discount": 0.025,
        "date": "23/08/2023",
        "_id": 26
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 36.38,
        "price": 1.652,
        "discount": 0.025,
        "date": "16/08/2023",
        "_id": 27
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 18.61,
        "price": 1.632,
        "discount": 0.025,
        "date": "10/08/2023",
        "_id": 28
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 24.99,
        "price": 1.612,
        "discount": 0.025,
        "date": "07/08/2023",
        "_id": 29
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 43.6,
        "price": 1.602,
        "discount": 0.025,
        "date": "01/08/2023",
        "_id": 30
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 25.8,
        "price": 1.572,
        "discount": 0.035,
        "date": "27/07/2023",
        "_id": 31
    },
    {
        "provider": "Kings",
        "fuelType": "Diesel",
        "amount": 21.64,
        "price": 1.49,
        "discount": 0.04,
        "date": "13/07/2023",
        "_id": 32
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 33.6,
        "price": 1.502,
        "discount": 0.035,
        "date": "06/07/2023",
        "_id": 33
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 45.29,
        "price": 1.482,
        "discount": 0.035,
        "date": "28/06/2023",
        "_id": 34
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 40.63,
        "price": 1.482,
        "discount": 0.035,
        "date": "20/06/2023",
        "_id": 35
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 48.21,
        "price": 1.452,
        "discount": 0.035,
        "date": "13/06/2023",
        "_id": 36
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 42.49,
        "price": 1.422,
        "discount": 0.035,
        "date": "06/06/2023",
        "_id": 37
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 41.69,
        "price": 1.442,
        "discount": 0.035,
        "date": "31/05/2023",
        "_id": 38
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 41.67,
        "price": 1.452,
        "discount": 0.035,
        "date": "22/05/2023",
        "_id": 39
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 41.29,
        "price": 1.462,
        "discount": 0.035,
        "date": "15/05/2023",
        "_id": 40
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 41.38,
        "price": 1.462,
        "discount": 0.035,
        "date": "10/05/2023",
        "_id": 41
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 39.43,
        "price": 1.522,
        "discount": 0.035,
        "date": "02/05/2023",
        "_id": 42
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 32.26,
        "price": 1.552,
        "discount": 0.035,
        "date": "25/04/2023",
        "_id": 43
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 38.04,
        "price": 1.582,
        "discount": 0.035,
        "date": "18/04/2023",
        "_id": 44
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 31.44,
        "price": 1.602,
        "discount": 0.035,
        "date": "12/04/2023",
        "_id": 45
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 37.17,
        "price": 1.622,
        "discount": 0.035,
        "date": "04/04/2023",
        "_id": 47
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 36.54,
        "price": 1.642,
        "discount": 0.035,
        "date": "29/03/2023",
        "_id": 46
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 18.54,
        "price": 1.632,
        "discount": 0.1,
        "date": "23/03/2023",
        "_id": 48
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 36.79,
        "price": 1.632,
        "discount": 0.035,
        "date": "21/03/2023",
        "_id": 49
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 35.76,
        "price": 1.682,
        "discount": 0.035,
        "date": "14/03/2023",
        "_id": 50
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 35.95,
        "price": 1.682,
        "discount": 0.035,
        "date": "07/03/2023",
        "_id": 51
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 36.42,
        "price": 1.652,
        "discount": 0.035,
        "date": "01/03/2023",
        "_id": 52
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 12.02,
        "price": 1.702,
        "discount": 0.1,
        "date": "22/02/2023",
        "_id": 53
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 34.68,
        "price": 1.722,
        "discount": 0.035,
        "date": "20/02/2023",
        "_id": 54
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 34.46,
        "price": 1.742,
        "discount": 0.035,
        "date": "07/02/2023",
        "_id": 55
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 16.88,
        "price": 1.782,
        "discount": 0.035,
        "date": "01/02/2023",
        "_id": 56
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 28.4,
        "price": 1.762,
        "discount": 0.1,
        "date": "20/01/2023",
        "_id": 57
    },
    {
        "provider": "Viada",
        "fuelType": "Diesel",
        "amount": 28.91,
        "price": 1.732,
        "discount": 0.035,
        "date": "16/01/2023",
        "_id": 58
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 12.36,
        "price": 1.642,
        "discount": 0.035,
        "date": "29/12/2022",
        "_id": 59
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 12.15,
        "price": 1.642,
        "discount": 0.035,
        "date": "27/12/2022",
        "_id": 60
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 12.25,
        "price": 1.642,
        "discount": 0.035,
        "date": "22/12/2022",
        "_id": 61
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 18.51,
        "price": 1.642,
        "discount": 0.035,
        "date": "19/12/2022",
        "_id": 62
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 15.32,
        "price": 1.642,
        "discount": 0.1,
        "date": "15/12/2022",
        "_id": 63
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 18.08,
        "price": 1.662,
        "discount": 0.035,
        "date": "13/12/2022",
        "_id": 64
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 17.67,
        "price": 1.702,
        "discount": 0.1,
        "date": "07/12/2022",
        "_id": 65
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 11.64,
        "price": 1.722,
        "discount": 0.035,
        "date": "05/12/2022",
        "_id": 66
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 11.75,
        "price": 1.722,
        "discount": 0.035,
        "date": "02/12/2022",
        "_id": 67
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 17.28,
        "price": 1.742,
        "discount": 0.035,
        "date": "30/11/2022",
        "_id": 68
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 17.29,
        "price": 1.742,
        "discount": 0.035,
        "date": "28/11/2022",
        "_id": 110
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 17.09,
        "price": 1.782,
        "discount": 0.035,
        "date": "23/11/2022",
        "_id": 69
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 17.07,
        "price": 1.782,
        "discount": 0.035,
        "date": "21/11/2022",
        "_id": 70
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.74,
        "price": 1.802,
        "discount": 0.035,
        "date": "16/11/2022",
        "_id": 71
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.52,
        "price": 1.822,
        "discount": 0.035,
        "date": "14/11/2022",
        "_id": 73
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 13.69,
        "price": 1.842,
        "discount": 0.035,
        "date": "10/11/2022",
        "_id": 72
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 11.29,
        "price": 1.84,
        "discount": 0.07,
        "date": "07/11/2022",
        "_id": 75
    },
    {
        "provider": "Kings",
        "fuelType": "Gasoline (E98)",
        "amount": 10.89,
        "price": 1.842,
        "discount": 0.035,
        "date": "07/11/2022",
        "_id": 74
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.28,
        "price": 1.842,
        "discount": 0.035,
        "date": "02/11/2022",
        "_id": 76
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.09,
        "price": 1.862,
        "discount": 0.035,
        "date": "31/10/2022",
        "_id": 77
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 10.71,
        "price": 1.862,
        "discount": 0.035,
        "date": "28/10/2022",
        "_id": 78
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 10.7,
        "price": 1.862,
        "discount": 0.035,
        "date": "26/10/2022",
        "_id": 79
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 15.74,
        "price": 1.902,
        "discount": 0.035,
        "date": "19/10/2022",
        "_id": 80
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 10.61,
        "price": 1.882,
        "discount": 0.035,
        "date": "17/10/2022",
        "_id": 81
    },
    {
        "provider": "Kings",
        "fuelType": "Gasoline (E98)",
        "amount": 10.98,
        "price": 1.86,
        "discount": 0.04,
        "date": "17/10/2022",
        "_id": 82
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.19,
        "price": 1.852,
        "discount": 0.035,
        "date": "12/10/2022",
        "_id": 83
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.33,
        "price": 1.832,
        "discount": 0.035,
        "date": "10/10/2022",
        "_id": 84
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 17,
        "price": 1.762,
        "discount": 0.035,
        "date": "05/10/2022",
        "_id": 85
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 17,
        "price": 1.772,
        "discount": 0.035,
        "date": "21/09/2022",
        "_id": 86
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 11.26,
        "price": 1.782,
        "discount": 0.035,
        "date": "19/09/2022",
        "_id": 87
    },
    {
        "provider": "Kings",
        "fuelType": "Gasoline (E98)",
        "amount": 11.69,
        "price": 1.78,
        "discount": 0.07,
        "date": "19/09/2022",
        "_id": 88
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.94,
        "price": 1.782,
        "discount": 0.035,
        "date": "14/09/2022",
        "_id": 89
    },
    {
        "provider": "Kings",
        "fuelType": "Gasoline (E98)",
        "amount": 11.36,
        "price": 1.8,
        "discount": 0.04,
        "date": "12/09/2022",
        "_id": 91
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 11.24,
        "price": 1.782,
        "discount": 0.035,
        "date": "12/09/2022",
        "_id": 90
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.63,
        "price": 1.802,
        "discount": 0.035,
        "date": "07/09/2022",
        "_id": 92
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 11.06,
        "price": 1.812,
        "discount": 0.035,
        "date": "05/09/2022",
        "_id": 93
    },
    {
        "provider": "Kings",
        "fuelType": "Gasoline (E98)",
        "amount": 11.42,
        "price": 1.82,
        "discount": 0.07,
        "date": "05/09/2022",
        "_id": 94
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.16,
        "price": 1.852,
        "discount": 0.025,
        "date": "31/08/2022",
        "_id": 95
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.39,
        "price": 1.852,
        "discount": 0.025,
        "date": "29/08/2022",
        "_id": 96
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.04,
        "price": 1.872,
        "discount": 0.025,
        "date": "24/08/2022",
        "_id": 97
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.07,
        "price": 1.872,
        "discount": 0.025,
        "date": "22/08/2022",
        "_id": 98
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 10.7,
        "price": 1.872,
        "discount": 0.025,
        "date": "19/08/2022",
        "_id": 99
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.02,
        "price": 1.872,
        "discount": 0.025,
        "date": "17/08/2022",
        "_id": 100
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 16.02,
        "price": 1.872,
        "discount": 0.025,
        "date": "15/08/2022",
        "_id": 101
    },
    {
        "provider": "Kings",
        "fuelType": "Gasoline (E98)",
        "amount": 18.92,
        "price": 1.89,
        "discount": 0.04,
        "date": "11/08/2022",
        "_id": 102
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 15.76,
        "price": 1.902,
        "discount": 0.025,
        "date": "08/08/2022",
        "_id": 103
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 10.47,
        "price": 1.902,
        "discount": 0.025,
        "date": "05/08/2022",
        "_id": 104
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 13.03,
        "price": 1.912,
        "discount": 0.025,
        "date": "03/08/2022",
        "_id": 105
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 10.38,
        "price": 1.922,
        "discount": 0.025,
        "date": "01/08/2022",
        "_id": 106
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 10.4,
        "price": 1.922,
        "discount": 0.025,
        "date": "28/07/2022",
        "_id": 107
    },
    {
        "provider": "Viada",
        "fuelType": "Gasoline (E98)",
        "amount": 15.66,
        "price": 1.912,
        "discount": 0,
        "date": "26/07/2022",
        "_id": 108
    },
    {
        "provider": "Kings",
        "fuelType": "Gasoline (E98)",
        "amount": 16.12,
        "price": 1.94,
        "discount": 0.08,
        "date": "24/07/2022",
        "_id": 109
    }
]

export {
    consumptionColumns,
    consumptionData
}