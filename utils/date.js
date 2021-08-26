export const formatDate = (date) => {
  return new Intl.DateTimeFormat([], {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: '2-digit',
  }).format(new Date(date))
}
