import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'
import * as S from './styleRegistr'
import LogoWhite from '../../img/logoWhite.jpg'
import { setToken, fetchToken } from './store/authSlice'
import { useRegisterMutation } from './store/api'

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [register, { isLoading }] = useRegisterMutation()
  console.log(register)

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(
      fetchToken({
        username: 'username',
        email: 'example@abc.com',
        password: 'password',
      })
    )
    if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match')
    } else {
      try {
        const result = await register({ username, email, password })
        const { data } = result

        dispatch(setToken(data.token))
        navigate('/login')
      } catch (error) {
        setErrorMessage('Registration failed')
      }
    }
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
          <S.EnterButton disabled={isLoading} onClick={handleSubmit}>
            Зарегистрироваться
          </S.EnterButton>
        </S.ButtonsDiv>

        {errorMessage && (
          <div
            style={{
              color: 'red',
            }}
          >
            {errorMessage}
          </div>
        )}
      </S.LoginDiv>
    </S.MainDiv>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  fetchToken: (credentials) => dispatch(fetchToken(credentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
