import { createSlice } from '@reduxjs/toolkit'
import { v4 as generateId } from 'uuid'
import { getInitialStorage } from '../utils/getInitialStorage'
import { updateStore } from '../utils/updateStore'

export const todoSlice = createSlice({
  'name': 'todo',
  'initialState': getInitialStorage(
    'todos',
    { 'todos': [], 'completed': 0, 'active': 0 },
  ),
  'reducers': {
    'addTodo': (state, action) => {
      const newTodo = {
        'id': generateId(),
        'name': action.payload,
        'completed': false,
      }

      state.todos.push(newTodo)
    },
    'removeTodo': (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)

      updateStore(state)
    },
    'changeStatus': (state, action) => {
      const editedTodo = state.todos.find((todo) => todo.id === action.payload)
      editedTodo.completed = !editedTodo.completed

      updateStore(state)
    },
    'clearCompleted': (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed)

      updateStore(state)
    },
  },
})

export const {
  addTodo,
  removeTodo,
  changeStatus,
  clearCompleted,
} = todoSlice.actions

export default todoSlice.reducer
