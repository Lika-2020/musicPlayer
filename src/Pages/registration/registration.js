import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function Registration() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [errorMessage, SetErrorMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password === !passwordRepeat) {
      SetErrorMessage('Пароль не совпадает, повторите попытку')
    } else {
      const setAuthTokenMock = (token) => {
        localStorage.setItem('authToken', token)
      }

      setAuthTokenMock('mockedAuthToken')

      setRedirectToLogin(true)
      const authToken = localStorage.getItem('authToken')
      const setCookie = useCookies(['authToken'])[1]
      setCookie('authToken', authToken, { path: '/' })
    }
  }

  if (redirectToLogin) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login">
          Логин:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            id="login"
            name="login"
            required
          />
        </label>

        <label htmlFor="password">
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="password"
            name="password"
            required
          />
        </label>

        <label htmlFor="password-confirm">
          Повторите пароль:
          <input
            type="password"
            value={passwordRepeat}
            onChange={(event) => setPasswordRepeat(event.target.value)}
            id="password-confirm"
            name="password-confirm"
            required
          />
        </label>

        {errorMessage && <div>{errorMessage}</div>}

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default Registration
