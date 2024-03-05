/* eslint-disable unicorn/filename-case */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../app/store/slices/todos-slice'
import { TextField } from '@mui/material'
import { Error } from '../Error/Error'

const MAX_NAME_LENGTH = 40

export const AddTodoForm = () => {
  const [error, setError] = useState('')
  const [todoName, setTodoName] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (todoName.trim().length > MAX_NAME_LENGTH) {
      setError(() => `Name should be shorter than ${MAX_NAME_LENGTH} symbols.`)
    } else if (error &&
      todoName.trim().length <= MAX_NAME_LENGTH &&
      todoName.trim().length > 0) {
      setError('')
    }
  }, [todoName, error])

  function handleSubmit(event) {
    event.preventDefault()

    if (todoName.trim().length === 0) {
      setError('Name can\'t be empty.')
      return
    }
    if (error) {
      return
    }

    dispatch(addTodo(todoName.trim()))
    setTodoName('')
  }

  function handleInputChange(event) {
    if (todoName.trim().length > MAX_NAME_LENGTH) {
      setError(() => `Name should be shorter than ${MAX_NAME_LENGTH} symbols.`)
    } else if (error && todoName.trim().length <= MAX_NAME_LENGTH) {
      setError('')
    }
    setTodoName(event.target.value)
  }

  return (
    <>
      {error && (
        <Error error={error} />
      )}

      <form onSubmit={handleSubmit} style={{ 'width': '100%' }}>
        <TextField
          label="Todo name"
          variant="outlined"
          sx={{ 'width': '100%' }}
          value={todoName}
          onChange={(event) => handleInputChange(event)}
        />
      </form>
    </>
  )
}
