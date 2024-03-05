/* eslint-disable unicorn/filename-case */
export function recalculateCounts(state) {
  state.active = state.todos.filter((todo) => !todo.completed).length
  state.completed = state.todos.filter((todo) => todo.completed).length
}
