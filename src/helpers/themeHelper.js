import { localStorageConstants } from "./constants"

const themeObject = {
    true: "light",
    false: "dark"
}

function setStyleProperty(propName, propValue) {
    document.querySelector(":root").style.setProperty(propName, propValue)
}

function getStyleProperty(propName) {
    return getComputedStyle(document.documentElement).getPropertyValue(propName)
}

const getNextThemeColors = (theme = themeObject[true]) => ({
    background: getStyleProperty(`--background-${theme}`),
    background2: getStyleProperty(`--background-${theme}-2`),
    color: getStyleProperty(`--color-${theme}`),
    accent: getStyleProperty(`--accent-${theme}`),
    accentRgb: getStyleProperty(`--accent-${theme}-rgb`),
    transparent: getStyleProperty(`--transparent-${theme}`)
})

const setNextThemeColors = (isLightTheme) => {
    const colors = getNextThemeColors(themeObject[isLightTheme])

    setStyleProperty("--background", colors.background)
    setStyleProperty("--background-2", colors.background2)
    setStyleProperty("--color", colors.color)
    setStyleProperty("--accent", colors.accent)
    setStyleProperty("--accent-rgb", colors.accentRgb)
    setStyleProperty("--transparent", colors.transparent)
}

const getCurrentTheme = () => {
    const isLightTheme = !!localStorage.getItem(localStorageConstants.MN_THEME_LIGHT)

    if (isLightTheme)
        setNextThemeColors(isLightTheme)

    return isLightTheme
}

const switchTheme = (isLightThemeSelected) => {
    if (isLightThemeSelected)
        localStorage.setItem(localStorageConstants.MN_THEME_LIGHT, true)
    else
        localStorage.removeItem(localStorageConstants.MN_THEME_LIGHT)

    setNextThemeColors(isLightThemeSelected)
}

export {
    getCurrentTheme,
    switchTheme
}