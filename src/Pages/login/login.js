import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const storedUsername = Cookies.get('username')
    const storedPassword = Cookies.get('password')
    if (storedUsername === username && storedPassword === password) {
      navigate('/main')
    } else {
      setErrorMessage('Incorrect username or password')
    }
  }

  const handleRegisterClick = () => {
    navigate('/registration')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
          <button type="button" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      </form>
      {errorMessage && <div  style={{
          color: 'black',
        }}>{errorMessage}</div>}
    </div>
  )
}

export default Login
