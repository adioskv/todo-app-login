/* eslint-disable unicorn/filename-case */
import React from 'react'
import {
  StatusContainer,
} from '../../containers/StatusContainer/StatusContainer'
import { useSelector } from 'react-redux'

export const TodosStatus = () => {
  const active = useSelector((state) => state.todo.active)
  const completed = useSelector((state) => state.todo.completed)

  return (
    <StatusContainer>
      <p>Active: {active}</p>
      <p>Completed: {completed}</p>
    </StatusContainer>
  )
}
