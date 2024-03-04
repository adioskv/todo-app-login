import { HashRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage/login-page.tsx'
import { TodosPage } from '../pages/TodosPage/todos-page.tsx'
import { ErrorPage } from '../pages/ErrorPage/error-page.tsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todos" element={<TodosPage status="" />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
