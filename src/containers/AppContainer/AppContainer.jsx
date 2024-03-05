/* eslint-disable unicorn/filename-case */
import { Box } from '@mui/material'
import React from 'react'

export const AppContainer = ({ children }) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      gap='36px'
      paddingTop='48px'
      maxWidth='100%'
    >
      {children}
    </Box>
  )
}
