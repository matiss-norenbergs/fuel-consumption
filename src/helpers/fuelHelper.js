import moment from "moment"

import { fuelProviderOptions, fuelTypeOptions, localStorageConstants } from "./constants"
import { getStringDate, getDateString } from "./dateHelper"
import { exportFile } from "./fileHelper"

const roundNumber = (number) => Math.round(number * 100) / 100

const calculateFuelPrice = ({ amount, price, discount }) => {
    const totalPrice = roundNumber(amount * price)
    const totalDiscount = roundNumber(discount * amount)
    const  priceAfterDiscount = roundNumber(totalPrice - totalDiscount)
    
    return { totalPrice, priceAfterDiscount, totalDiscount }
}

const getFuelData = () => {
    const data = JSON.parse(localStorage.getItem(localStorageConstants.MN_FUEL_DATA)) || []
    return data.map(({ fuelType, provider, ...rest }) => {
        const calcPrices = calculateFuelPrice(rest)

        return {
            ...rest,
            fuelType: fuelTypeOptions[fuelType],
            provider: fuelProviderOptions[provider],
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
    localStorage.setItem(localStorageConstants.MN_FUEL_DATA, JSON.stringify(data))
}

const getSummary = (data = []) => {    
    if (data.length === 0)
        return

    let totalSpent = 0
    let totalAfterDiscount = 0
    let fuelConsumed = 0

    const allDates = []
    const specificFuelData = {}

    data.forEach(({
        fuelType,
        amount,
        totalPrice,
        priceAfterDiscount,
        date
    }) => {
        totalSpent += totalPrice
        totalAfterDiscount += priceAfterDiscount
        fuelConsumed += amount

        allDates.push(getStringDate(date))

        if (!specificFuelData[fuelType]) {
            specificFuelData[fuelType] = {
                from: date,
                to: date,
                refills: 1,
                totalSpent: totalPrice,
                totalSpentDiscount: priceAfterDiscount,
                amount: amount
            }
        } else {
            specificFuelData[fuelType].from = date
            specificFuelData[fuelType].refills += 1
            specificFuelData[fuelType].totalSpent += totalPrice
            specificFuelData[fuelType].totalSpentDiscount += priceAfterDiscount
            specificFuelData[fuelType].amount += amount
        }
    })

    Object.keys(specificFuelData).forEach(fuelType => {
        let fuelData = specificFuelData[fuelType]
        let startDate = moment(fuelData.from, "dd/MM/yyyy")
        let endDate = moment(fuelData.to, "dd/MM/yyyy")

        specificFuelData[fuelType].totalSpent = roundNumber(fuelData.totalSpent)
        specificFuelData[fuelType].totalSpentDiscount = roundNumber(fuelData.totalSpentDiscount)
        specificFuelData[fuelType].amount = roundNumber(fuelData.amount)
        specificFuelData[fuelType].periodDiffDays = endDate.diff(startDate, "days")
    })

    const sortedFuelDataTypes = Object.keys(specificFuelData).sort(function(a,b){ return specificFuelData[a].totalSpentDiscount - specificFuelData[b].totalSpentDiscount }).reverse()
    const sortedFuelData = {}
    sortedFuelDataTypes.forEach(type => {
        sortedFuelData[type] = specificFuelData[type]
    })

    const refillCount = data.length
    const minDate = new Date(Math.min.apply(null, allDates))
    const maxDate = new Date(Math.max.apply(null, allDates))
    const dateRange = minDate && maxDate ? `${getDateString(minDate)} - ${getDateString(maxDate)}` : null
    const totalSaved = roundNumber(totalSpent - totalAfterDiscount)

    totalSpent = roundNumber(totalSpent)
    totalAfterDiscount = roundNumber(totalAfterDiscount)
    fuelConsumed = roundNumber(fuelConsumed)

    return {
        refillCount,
        dateRange,
        totalSpent,
        totalAfterDiscount,
        fuelConsumed,
        totalSaved,
        sortedFuelData
    }
}

const exportFuelData = (data = []) => {
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

    exportFile(jsonData, `FuelData_${moment().valueOf()}`, ".json")
}

const invertObject = (targetObject = {}) => {
    const invertedObject = {}

    Object.keys(targetObject).forEach(key => {
        invertedObject[targetObject[key]] = key
    })

    return invertedObject
}

const importFuelData = (data = []) => {
    if (data.length === 0)
        return

    const invertedFuelTypes = invertObject(fuelTypeOptions)
    const invertedProviders = invertObject(fuelProviderOptions)

    const importedData = data.map(({
        _id,
        provider,
        fuelType,
        amount,
        price,
        discount,
        date
    }) => ({
        _id,
        provider: Number(invertedProviders[provider]),
        fuelType: Number(invertedFuelTypes[fuelType]),
        amount,
        price,
        discount,
        date
    }))

    saveFuelDataList(importedData)
}

export {
    getDateString,
    getStringDate,
    calculateFuelPrice,
    getFuelData,
    saveFuelData,
    saveFuelDataList,
    roundNumber,
    getSummary,
    exportFuelData,
    importFuelData
}