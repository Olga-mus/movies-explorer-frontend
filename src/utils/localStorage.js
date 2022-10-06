export function setLocal(name, value) {
  localStorage.setItem(name, JSON.stringify(value))
}

export function getLocal(name) {
  const local = localStorage.getItem(name)
  return local ? JSON.parse(local) : null
}

export function deleteLocal(name) {
  localStorage.removeItem(name)
}
