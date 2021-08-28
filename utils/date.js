export const formatDate = (date) => {
  return new Intl.DateTimeFormat([], {
    dateStyle: 'long',
  }).format(new Date(date))
}
