import { useSelector } from 'react-redux'
import { Todo } from '../components/Todo/todo'
import { AddTodoForm } from '../components/AddTodoForm/add-todo-form'
import { useState } from 'react'
import { Box } from '@mui/material'
import { Filters } from '../components/Filters/filters'
import { TodosStatus } from '../components/TodosStatus/todos-status'

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
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      gap='36px'
      paddingTop='48px'
      maxWidth='100%'
    >
      <h1>Todo app</h1>

      <Box
        boxShadow={'9px 11px 37px 0px rgba(0,0,0,0.35)'}
        borderRadius='16px'

        display='inline-flex'
        flexDirection='column'
        gap='12px'

        minWidth='230px'
        padding='56px'
      >
        <AddTodoForm />
        {todos.length > 0 && <TodosStatus todos={todos} />}
        {renderedTodos.map((todo) => <Todo todo={todo} key={todo.id}/>)}

        {todos.length > 0 && (
          <Filters filter={filter} onChange={handleFilterChange} />
        )}
      </Box>
    </Box>
  )
}

export default App
