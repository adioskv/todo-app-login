/* eslint-disable unicorn/filename-case */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { clearCompleted } from '../../app/store/slices/todos-slice'

export const ClearCompleted = ({ todos }) => {
  const dispatch = useDispatch()

  function handleClearCompleted() {
    dispatch(clearCompleted())
  }

  const isVisible = todos.some((todo) => todo.completed)
  return (
    isVisible && <Button onClick={handleClearCompleted}>Clear completed</Button>
  )
}
