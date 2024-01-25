const formatNumber = (num = 0) => {
    return num.toLocaleString("en-US", {
        minimumIntegerDigits: 2
    })
}

const getDateString = (dateStr, returnTime = false) => {
    const date = new Date(dateStr)
    const myDate = []
    
    myDate.push(formatNumber(date.getDate()))
    myDate.push(formatNumber(date.getMonth() + 1))
    myDate.push(date.getFullYear())
    
    if (returnTime) {
        const myTime = []
        myTime.push(formatNumber(date.getHours()))
        myTime.push(formatNumber(date.getMinutes()))
        myTime.push(formatNumber(date.getSeconds()))

        return `${myDate.join('/')} ${myTime.join(':')}`
    }

    return myDate.join('/')
}

const getStringDate = (strDate = "", symbol = '/') => {
    const dateArr = strDate.split(symbol)
    const date = new Date(dateArr[2], dateArr[1] - 1, dateArr[0])

    return date
}

export {
    formatNumber,
    getDateString,
    getStringDate
}