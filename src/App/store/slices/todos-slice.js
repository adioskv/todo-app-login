import { createSlice } from '@reduxjs/toolkit'
import { v4 as generateId } from 'uuid'
import { getInitialStorage } from '../utils/get-initial-storage'
import { saveToStorage } from '../utils/save-to-storage'

export const todoSlice = createSlice({
  'name': 'todo',
  'initialState': getInitialStorage('todos', { 'todos': [] }),
  'reducers': {
    'addTodo': (state, action) => {
      const newTodo = {
        'id': generateId(),
        'name': action.payload,
        'completed': false,
      }

      state.todos.push(newTodo)
      saveToStorage('todos', state)
    },
    'removeTodo': (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      saveToStorage('todos', state)
    },
    'changeStatus': (state, action) => {
      const editedTodo = state.todos.find((todo) => todo.id === action.payload)

      editedTodo.completed = !editedTodo.completed
      saveToStorage('todos', state)
    },
  },
})

export const { addTodo, removeTodo, changeStatus } = todoSlice.actions
export default todoSlice.reducer
