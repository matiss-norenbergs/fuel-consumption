import moment from "moment"

import { getTranslation } from "./translationHelper"

const formatNumber = (num = 0) => {
    return num.toLocaleString("en-US", {
        minimumIntegerDigits: 2
    })
}

const getDateString = (dateStr, returnTime = false, shortFormat = getTranslation("dateTimeShort"), longFormat = getTranslation("dateTimeLong")) => moment(dateStr).format(returnTime ? longFormat : shortFormat)

const getStringDate = (strDate) => moment(strDate, "DD/MM/YYYY HH:mm:ss")

export {
    formatNumber,
    getDateString,
    getStringDate
}