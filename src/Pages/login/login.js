import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import LogoWhite from '../../img/logoWhite.jpg'
import * as S from './styleLogin'

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

            <S.PasswordInput
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </form>
        </S.LogPassDiv>
        <S.ButtonsDiv>
          <S.EnterButton onClick={handleSubmit}>Войти</S.EnterButton>
          <S.RegistrationButton type="button" onClick={handleRegisterClick}> Зарегистрироваться </S.RegistrationButton>
        </S.ButtonsDiv>

        {errorMessage && (
          <div
            style={{
              color: 'red',
              margin: '20px'
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
