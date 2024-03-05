/* eslint-disable unicorn/filename-case */
export function saveToStorage(name, state) {
  localStorage.setItem(name, JSON.stringify(state))

  return {
    'get': () => JSON.parse(localStorage.getItem(name)),
    'delete': () => localStorage.removeItem(name),
  }
}
