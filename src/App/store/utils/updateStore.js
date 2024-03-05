/* eslint-disable unicorn/filename-case */
import { recalculateCounts } from './recalculateCounts'
import { saveToStorage } from './saveToStorage'

export function updateStore(state) {
  recalculateCounts(state)
  saveToStorage('todos', state)
}
