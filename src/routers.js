import { Routes, Route } from 'react-router-dom'
import Login from './Pages/login/login'
import Main from './Pages/main/main'
import Registration from './Pages/registration/registration'

function AppRouters() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />

      <Route  path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  )
}

export default AppRouters
