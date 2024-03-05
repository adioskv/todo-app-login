/* eslint-disable unicorn/filename-case */
import React from 'react'
import { Todo } from '../Todo/Todo.jsx'

export const TodosList = ({ todos }) => {
  return (
    todos.map((todo) => (
      <Todo todo={todo} key={todo.id}/>
    ))
  )
}
