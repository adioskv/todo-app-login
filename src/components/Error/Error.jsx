/* eslint-disable unicorn/filename-case */
import { Alert } from '@mui/material'
import React from 'react'

export const Error = ({ error }) => {
  return (
    <Alert severity="warning">
      {error}
    </Alert>
  )
}
