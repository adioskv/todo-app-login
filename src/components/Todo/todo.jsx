/* eslint-disable unicorn/filename-case */
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeStatus, removeTodo } from '../../app/store/slices/todos-slice'
import { Chip } from '@mui/material'

export const Todo = ({ todo }) => {
  const { id, name, completed } = todo

  const dispatch = useDispatch()

  function handleRemoveTodo() {
    dispatch(removeTodo(id))
  }
  function handleStatusChange() {
    dispatch(changeStatus(id))
  }

  return (
    <Chip
      color='info'
      label={name}
      variant={completed ? 'outlined' : 'primary'}
      onDelete={handleRemoveTodo}
      onClick={handleStatusChange}
      sx={{
        'fontSize': '16px',
        'borderRadius': '10px',
        'height': 'fit-content',
        'paddingY': '15px',
        'paddingX': '10px',
        'width': '100%',
        'justifyContent': 'space-between',
        'textDecorationLine': completed ? 'line-through' : 'none',
        '& span': {
          'display': 'flex',
          'flexWrap': 'wrap',
          'textWrap': 'wrap',
        },
      }}
    />
  )
}
