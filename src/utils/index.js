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

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('id-ID', options)
}

const formatHtmlToTextPlaceholder = (html) => {
  return html
    .replace(/<\/p>/g, '\n') // Replace paragraph end with new line
    .replace(/<br>/g, '\n') // Replace line breaks with new line
    .replace(/<b>(.*?)<\/b>/g, '**$1**') // Replace bold tags with markdown bold
    .replace(/<i>(.*?)<\/i>/g, '*$1*') // Replace italic tags with markdown italic
    .replace(/<[^>]+>/g, '') // Remove any remaining HTML tags
    .trim() // Trim leading/trailing whitespace
}

export { truncateDescription, getMonthName, formatHtmlToTextPlaceholder, formatDate }
