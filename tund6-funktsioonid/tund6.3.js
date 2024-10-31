//.map

const dates = ["2024-1-10", "2025-2-30", "2026-3-30"]
const formattedDates = dates.map(formatDates)

console.log(formattedDates)

function formatDates(element){
    const parts = element.split("-")
    return `${parts[2]}/${parts[1]}/${parts[0]}}`;
}