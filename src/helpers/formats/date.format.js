export function getWeekNumber(date) {
    // Tạo một bản sao của ngày để không thay đổi đối tượng gốc
    const copyDate = new Date(date.getTime())

    // Đặt ngày thành Thứ Hai (ISO tuần bắt đầu vào Thứ Hai)
    copyDate.setHours(0, 0, 0, 0)
    copyDate.setDate(copyDate.getDate() + 3 - ((copyDate.getDay() + 6) % 7))

    // Lấy ngày đầu tiên của năm hiện tại
    const firstWeek = new Date(copyDate.getFullYear(), 0, 4)

    // Tính số ngày giữa ngày đầu tiên của năm và ngày hiện tại
    const weekNumber = Math.ceil(((copyDate - firstWeek) / 86400000 + 1) / 7)

    return weekNumber
}
export const formatDate = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${day}/${month}/${year}`
}
// export const firstDayOfWeek = (currentDate) => {
//     let res = new Date(currentDate)
//     res.setDate(currentDate.getDate() - dayOfWeek)
// }
// export const lastDayOfWeek = (currentDate) => {
//     let res = new Date(currentDate)
//     res.setDate(currentDate.getDate() + (6 - dayOfWeek))
// }
// export const dayOfWeek = (currentDate) => {
//     return currentDate.getDay() - 1
// }
