import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match')
    } else {
      Cookies.set('username', username)
      Cookies.set('password', password)
      navigate('/login')
    }
  }

  return (
    <div>
      <h2>Register</h2>
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
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="repeatPassword">
            Repeat Password:
            <input
              id="repeatPassword"
              type="password"
              value={repeatPassword}
              onChange={(event) => setRepeatPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      {errorMessage && (
        <div
          style={{
            color: 'black',
          }}
        >
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default Register
