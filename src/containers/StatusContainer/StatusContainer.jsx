/* eslint-disable unicorn/filename-case */
import React from 'react'
import { Box } from '@mui/material'

export const StatusContainer = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingInline="12px"
    >
      {children}
    </Box>
  )
}
