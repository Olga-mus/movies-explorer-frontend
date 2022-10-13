export function durationFormat(duration) {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60

  if (hours && minutes) return `${hours}ч ${minutes}м`

  if (hours) return `${hours}ч`

  if (minutes) return `${minutes}м`
}
