
import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'


function Login({loginUser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, SetErrorMessage] = useState('');
  const [redirectToMain, setRedirectToMain] = useState(false)
  const [redirectToRegistration, setRedirectToRegistration] = useState(false)

  
  function handleRegisterClick() {
    setRedirectToRegistration(true)
   
  }

  if (redirectToRegistration) {
    <Navigate to="/registration" />
 }

  function handleAuthorization(event) {
    event.PreventDefault();
    const authToken = localStorage.getItem('authToken');
    if (authToken && authToken.password === password) {
      SetErrorMessage("Вы ввели неверный пароль, повторите попытку снова")
    }else{
      loginUser(authToken);
      setRedirectToMain(true);
    }
   
  }

  if (redirectToMain) {
    <Navigate to="/main" />
 }

 
  return (
    <div>
      <form>
        <label htmlFor="login">
          Логин:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} id="login" name="login" />
        </label>
        <br />
        <br />

        <label htmlFor="password">
          Пароль:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} id="password" name="password" />
        </label>
        <br />
        <br />

         
        {errorMessage && <div>{errorMessage}</div>}

        <button type="submit" onClick={handleAuthorization}>Войти</button>
        <button type="submit" onClick={handleRegisterClick}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}
export default Login
