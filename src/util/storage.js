export const getStore = name => {
  if (!name) return 
  return window.localStorage.getItem(name)
}

export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
