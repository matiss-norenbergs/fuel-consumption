function exportFile(exportData, fileName = "exportSample", fileExtension = ".txt") {
    if (!exportData)
        return

    const link = document.createElement("a")
    const file = new Blob([exportData], { type: 'text/plain' })

    link.href = URL.createObjectURL(file)
    link.download = `${fileName}${fileExtension}`
    link.click()

    URL.revokeObjectURL(link.href)
}

export {
    exportFile
}