const localStorageConstants = {
    MN_USER_LANG: "MN_USER_LANG"
}

const supportedLanguages = {
    "en-gb": "English",
    "lv": "Latviešu",
    "de-de": "Deutsch"
}

const translations = {
    "test": {
        "lv": "",
        "en-gb": "",
        "de-de": ""
    },
    "language": {
        "lv": "Valoda",
        "en-gb": "Language",
        "de-de": "Sprache"
    },
    "appTitle": {
        "lv": "Degvielas patēriņš",
        "en-gb": "Fuel consumption",
        "de-de": "Kraftstoffverbrauch"
    },
    "dateTimeShort": {
        "lv": "DD/MM/YYYY",
        "en-gb": "DD/MM/YYYY",
        "de-de": "DD.MM.YYYY"
    },
    "dateTimeLong": {
        "lv": "DD/MM/YYYY HH:mm:ss",
        "en-gb": "DD/MM/YYYY HH:mm:ss",
        "de-de": "DD.MM.YYYY HH:mm:ss"
    },
    "create": {
        "lv": "Izveidot",
        "en-gb": "Create",
        "de-de": ""
    },
    "edit": {
        "lv": "Mainīt",
        "en-gb": "Edit",
        "de-de": ""
    },
    "delete": {
        "lv": "Izdzēst",
        "en-gb": "Delete",
        "de-de": ""
    },
    "getData": {
        "lv": "Iegūt datus",
        "en-gb": "Get data",
        "de-de": ""
    },
    "cancel": {
        "lv": "Atcelt",
        "en-gb": "Cancel",
        "de-de": ""
    },
    "confirm": {
        "lv": "Apstiprināt",
        "en-gb": "Confirm",
        "de-de": ""
    },
    "import": {
        "lv": "Importēt",
        "en-gb": "Import",
        "de-de": ""
    },
    "export": {
        "lv": "Eksportēt",
        "en-gb": "Export",
        "de-de": ""
    },
    "provider": {
        "lv": "Piegādātājs",
        "en-gb": "Provider",
        "de-de": ""
    },
    "fuelType": {
        "lv": "Degvielas tips",
        "en-gb": "Fuel type",
        "de-de": ""
    },
    "amount": {
        "lv": "Daudzums (l)",
        "en-gb": "Amount (l)",
        "de-de": ""
    },
    "price": {
        "lv": "Cena (€/l)",
        "en-gb": "Price (€/l)",
        "de-de": ""
    },
    "discount": {
        "lv": "Atlaide (€/l)",
        "en-gb": "Discount (€/l)",
        "de-de": ""
    },
    "date": {
        "lv": "Datums",
        "en-gb": "Date",
        "de-de": ""
    },
    "total": {
        "lv": "Kopā (€)",
        "en-gb": "Total (€)",
        "de-de": ""
    },
    "createRecord": {
        "lv": "Izveidot ierakstu",
        "en-gb": "Create record",
        "de-de": ""
    },
    "diesel": {
        "lv": "Dīzelis",
        "en-gb": "Diesel",
        "de-de": ""
    },
    "gasoline98": {
        "lv": "Benzīns (E98)",
        "en-gb": "Gasoline (E98)",
        "de-de": ""
    },
    "gasoline95": {
        "lv": "Benzīns (E95)",
        "en-gb": "Gasoline (E95)",
        "de-de": ""
    },
    "gas": {
        "lv": "Gāze",
        "en-gb": "Gas",
        "de-de": ""
    },
    "summary": {
        "lv": "Apkopojums",
        "en-gb": "Summary",
        "de-de": ""
    },
    "totalSaved": {
        "lv": "Kopā ietaupīts",
        "en-gb": "Total saved",
        "de-de": ""
    },
    "details": {
        "lv": "Detaļas",
        "en-gb": "Details",
        "de-de": ""
    },
    "period": {
        "lv": "Periods",
        "en-gb": "Period",
        "de-de": ""
    },
    "duration": {
        "lv": "Ilgums",
        "en-gb": "Duration",
        "de-de": ""
    },
    "refills": {
        "lv": "Uzpildes",
        "en-gb": "Refills",
        "de-de": ""
    },
    "beforeDiscount": {
        "lv": "Pirms atlaides",
        "en-gb": "Before discount",
        "de-de": ""
    },
    "afterDiscount": {
        "lv": "Pēc atlaides",
        "en-gb": "After discount",
        "de-de": ""
    },
    "fuelAmount": {
        "lv": "Degvielas daudzums",
        "en-gb": "Fuel amount",
        "de-de": ""
    },
    "days": {
        "lv": "dienas",
        "en-gb": "days",
        "de-de": ""
    },
}

const selectedLanguage = localStorage.getItem(localStorageConstants.MN_USER_LANG) || "en-gb"

const getTranslation = (translationCode) => translations?.[translationCode]?.[selectedLanguage] || `@@ ${translationCode}`

function setUserLangugage(langId) {
    localStorage.setItem(localStorageConstants.MN_USER_LANG, langId)
    location.reload()
}

export {
    supportedLanguages,
    translations,
    getTranslation,
    setUserLangugage
}