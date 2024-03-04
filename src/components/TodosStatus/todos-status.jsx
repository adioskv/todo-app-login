import { Box } from '@mui/material'
import React from 'react'

export const TodosStatus = ({ todos }) => {
  function countByStatus(isActive) {
    return todos.filter((todo) => todo.completed === isActive).length
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingInline="12px"
    >
      <p>Active: {countByStatus(false)}</p>
      <p>Completed: {countByStatus(true)}</p>
    </Box>
  )
}
