/* eslint-disable unicorn/filename-case */
import { Box } from '@mui/material'
import React from 'react'

export const TodosContainer = ({ children }) => {
  return (
    <Box
      display='inline-flex'
      flexDirection='column'
      gap='8px'
      padding='40px'
      boxShadow={'9px 11px 37px 0px rgba(0,0,0,0.35)'}
      borderRadius='16px'
      width='500px'
      sx={{
        'transition': 'all 0.2s ease-in-out',
      }}
    >
      {children}
    </Box>
  )
}
