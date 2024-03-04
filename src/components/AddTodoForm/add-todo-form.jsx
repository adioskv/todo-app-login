import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../app/store/slices/todos-slice'
import { Alert, TextField } from '@mui/material'

const MAX_NAME_LENGTH = 40

export const AddTodoForm = () => {
  const [error, setError] = useState('')
  const [todoName, setTodoName] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (todoName.length > MAX_NAME_LENGTH) {
      setError(() => `Name should be shorter than ${MAX_NAME_LENGTH} symbols.`)
    } else if (error && todoName.length <= MAX_NAME_LENGTH) {
      setError('')
    }
  }, [todoName, error])

  function handleSubmit(event) {
    event.preventDefault()

    if (!todoName) {
      setError('Name can\'t be empty.')
      return
    }
    if (error) {
      return
    }

    dispatch(addTodo(todoName))
    setTodoName('')
  }

  function handleInputChange(event) {
    setTodoName(event.target.value)
    if (todoName.length > MAX_NAME_LENGTH) {
      setError(() => `Name should be shorter than ${MAX_NAME_LENGTH} symbols.`)
    } else if (error && todoName.length <= MAX_NAME_LENGTH) {
      setError('')
    }
  }

  return (
    <>
    {error && (
      <Alert severity="warning">
        {error}
      </Alert>
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
