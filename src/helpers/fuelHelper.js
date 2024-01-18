const MN_FUEL_DATA = "MN_FUEL_DATA"

const roundPrice = (price) => Math.round(price * 100) / 100

const formatNumber = (num = 0) => {
    return num.toLocaleString("en-US", {
        minimumIntegerDigits: 2
    })
}

const getDateString = (dateStr) => {
    const date = new Date(dateStr)
    const myDate = []

    myDate.push(formatNumber(date.getDate()))
    myDate.push(formatNumber(date.getMonth() + 1))
    myDate.push(date.getFullYear())

    return myDate.join('/')
}

const getStringDate = (strDate = "", symbol = '/') => {
    const dateArr = strDate.split(symbol)
    const date = new Date(dateArr[2], dateArr[1] - 1, dateArr[0])

    return date
}

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
    console.log("SAVE DATA")
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

export {
    getDateString,
    getStringDate,
    calculateFuelPrice,
    getFuelData,
    saveFuelData,
    saveFuelDataList,
    roundPrice
}