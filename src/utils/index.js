const truncateDescription = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength)}...`
}

const getMonthName = (dateString) => {
  const date = new Date(dateString)
  const monthNamesShort = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  const monthIndex = date.getMonth()
  return monthNamesShort[monthIndex]
}

export { truncateDescription, getMonthName }
