import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import LogoWhite from '../../img/logoWhite.jpg'
import * as S from './styleLogin'
import { useGetTokenMutation } from '../registration/store/api'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const [getToken, { isLoading }] = useGetTokenMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const storedUsername = Cookies.get('username')
    const storedPassword = Cookies.get('password')
    const storedEmail = Cookies.get('email')
    if (
      storedUsername === username &&
      storedPassword === password &&
      storedEmail === email
    ) {
      navigate('/main')
    } else {
      try {
        const { data } = await getToken({ username, password, email })
        // store the token in localStorage or Cookies
        localStorage.setItem('token', data.access)
        navigate('/main')
      } catch (error) {
        setErrorMessage('Incorrect username or password')
      }
    }
  }

  const handleRegisterClick = () => {
    navigate('/registration')
  }

  return (
    <S.MainDiv>
      <S.LoginDiv>
        <S.LogoDiv>
          <S.LogoImg src={LogoWhite} alt="logo" />
        </S.LogoDiv>
        <S.LogPassDiv>
          <form>
            <S.LoginInput
              placeholder="Логин"
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />

            <S.LoginInput
              placeholder="Почта"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <S.PasswordInput
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </form>
        </S.LogPassDiv>
        <S.ButtonsDiv>
          <S.EnterButton disabled={isLoading} onClick={handleSubmit}>
            Войти
          </S.EnterButton>
          <S.RegistrationButton type="button" onClick={handleRegisterClick}>
            {' '}
            Зарегистрироваться{' '}
          </S.RegistrationButton>
        </S.ButtonsDiv>

        {errorMessage && (
          <div
            style={{
              color: 'red',
              margin: '20px',
            }}
          >
            {errorMessage}
          </div>
        )}
      </S.LoginDiv>
    </S.MainDiv>
  )
}

export default Login
