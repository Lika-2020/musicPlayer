import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import * as S from './styleRegistr'
import LogoWhite from '../../img/logoWhite.jpg'

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

  <S.MainDiv>
    <S.LoginDiv>
      <S.LogoDiv>
        <S.LogoImg src={LogoWhite} alt="logo" />
      </S.LogoDiv>
      <S.LogPassDiv>
        <S.LoginInput type="text" placeholder="Логин" />
        <S.PasswordInput type="text" placeholder="Пароль" />
        <S.AgainPasswordInput type="text" placeholder="Повторите пароль" />
      </S.LogPassDiv>
      <S.ButtonsDiv>
        <S.EnterButton>Зарегистрироваться</S.EnterButton>
      </S.ButtonsDiv>
    </S.LoginDiv>
  </S.MainDiv>

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
              placeholder="Пароль"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <S.AgainPasswordInput
              placeholder="Повторите пароль"
              id="repeatPassword"
              type="password"
              value={repeatPassword}
              onChange={(event) => setRepeatPassword(event.target.value)}
            />
          </form>
        </S.LogPassDiv>
        <S.ButtonsDiv>
          <S.EnterButton onClick={handleSubmit}>Зарегистрироваться</S.EnterButton>
        </S.ButtonsDiv>

        {errorMessage && (
          <div
            style={{
              color: 'black',
            }}
          >
            {errorMessage}
          </div>
        )}
      </S.LoginDiv>
    </S.MainDiv>
  )
}

export default Register
