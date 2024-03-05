/* eslint-disable unicorn/filename-case */
import { useSelector } from 'react-redux'
import { AddTodoForm } from '../components/AddTodoForm/AddTodoForm'
import { useState } from 'react'
import { Filters } from '../components/Filters/Filters'
import { TodosStatus } from '../components/TodosStatus/TodosStatus'
import { TodosList } from '../components/TodosList/TodosList'
import { ClearCompleted } from '../components/ClearCompleted/ClearCompleted'
import { AppContainer } from '../containers/AppContainer/AppContainer'
import { TodosContainer } from '../containers/TodosContainer/TodosContainer'

function App() {
  const [filter, setFilter] = useState('')
  const todos = useSelector((state) => state.todo.todos)

  function handleFilterChange(event) {
    setFilter(event.target.value)
  }

  const renderedTodos = todos.filter((todo) => {
    if (filter) {
      return filter === 'active' ? !todo.completed : todo.completed
    }

    return true
  })

  return (
    <AppContainer>
      <h1>Todo app</h1>

      <TodosContainer>
        <AddTodoForm />

        {todos.length > 0 && (
          <Filters filter={filter} onChange={handleFilterChange} />
        )}

        {todos.length > 0 && <TodosStatus />}

        <TodosList todos={renderedTodos} />

        <ClearCompleted todos={todos} />
      </TodosContainer>
    </AppContainer>
  )
}

export default App
