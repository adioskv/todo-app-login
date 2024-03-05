/* eslint-disable unicorn/filename-case */
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'

export const Filters = ({ filter, onChange }) => {
  return (
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={onChange}
      aria-label="text alignment"
      color="primary"
      sx={{ 'margin': '0 auto' }}
    >
      <ToggleButton value="" aria-label="left aligned">
        all
      </ToggleButton>
      <ToggleButton value="completed" aria-label="centered">
        completed
      </ToggleButton>
      <ToggleButton value="active" aria-label="right aligned">
        active
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
