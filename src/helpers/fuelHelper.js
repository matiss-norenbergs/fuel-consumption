import { getStringDate, getDateString } from "./dateHelper"
import { exportFile } from "./fileHelper"

const MN_FUEL_DATA = "MN_FUEL_DATA"

const roundPrice = (price) => Math.round(price * 100) / 100

const calculateFuelPrice = ({ amount, price, discount }) => {
    const totalPrice = roundPrice(amount * price)
    const totalDiscount = roundPrice(discount * amount)
    const  priceAfterDiscount = roundPrice(totalPrice - totalDiscount)
    
    return { totalPrice, priceAfterDiscount, totalDiscount }
}

const getFuelData = () => {
    const data = JSON.parse(localStorage.getItem(MN_FUEL_DATA)) || []
    return data.map((item) => {
        const calcPrices = calculateFuelPrice(item)

        return {
            ...item,
            totalPrice: calcPrices.totalPrice,
            priceAfterDiscount: calcPrices.priceAfterDiscount
        }
    }).sort((item1, item2) => {
        return getStringDate(item1.date) - getStringDate(item2.date)
    }).reverse()
}

const saveFuelData = (data) => {
    const allData = getFuelData()
    const idList = allData.map(({ _id }) => _id)
    let newId = Math.max(...idList) + 1

    data._id = newId
    allData.push(data)

    saveFuelDataList(allData)
}

const saveFuelDataList = (data) => {
    localStorage.setItem(MN_FUEL_DATA, JSON.stringify(data))
}

const getSummary = (data = []) => {
    let totalSpent = 0
    let totalAfterDiscount = 0
    let fuelConsumed = 0
    const allDates = []

    if (data.length === 0)
        return

    data.forEach(({
        amount,
        totalPrice,
        priceAfterDiscount,
        date
    }) => {
        totalSpent += totalPrice
        totalAfterDiscount += priceAfterDiscount
        fuelConsumed += amount
        allDates.push(getStringDate(date))
    })

    const refilCount = data.length
    const minDate = new Date(Math.min.apply(null, allDates))
    const maxDate = new Date(Math.max.apply(null, allDates))
    const dateRange = minDate && maxDate ? `${getDateString(minDate)} - ${getDateString(maxDate)}` : null
    const totalSaved = roundPrice(totalSpent - totalAfterDiscount)

    totalSpent = roundPrice(totalSpent)
    totalAfterDiscount = roundPrice(totalAfterDiscount)
    fuelConsumed = roundPrice(fuelConsumed)

    return {
        refilCount,
        dateRange,
        totalSpent,
        totalAfterDiscount,
        fuelConsumed,
        totalSaved
    }
}

const exportFuelData = () => {
    const data = getFuelData()
    if (data.length === 0)
        return

    const exportData = data.map(({
        provider,
        fuelType,
        amount,
        price,
        discount,
        date,
        totalPrice,
        priceAfterDiscount
    }, index) => ({
        _id: index + 1,
        provider,
        fuelType,
        amount,
        price,
        discount,
        date,
        totalPrice,
        priceAfterDiscount
    }))

    const jsonData = JSON.stringify({
        fuelData: exportData
    }, null, 4)

    exportFile(jsonData, `FuelData_${new Date().valueOf()}`, ".json")
}

export {
    getDateString,
    getStringDate,
    calculateFuelPrice,
    getFuelData,
    saveFuelData,
    saveFuelDataList,
    roundPrice,
    getSummary,
    exportFuelData
}