/* eslint-disable unicorn/filename-case */
export function getInitialStorage(name, state) {
  const stateFromStorage = localStorage.getItem(name)

  return JSON.parse(stateFromStorage) || state
}
