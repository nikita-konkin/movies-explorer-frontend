import React, { useState, useEffect } from 'react';
import {
  Link,
} from "react-router-dom";
import Header from './Header.jsx'

function navigation() {
  return false;
}

export default function Login(props) {

  const [userEmailClass, setUserEmailClass] = useState(false)
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const welcomeText = props.registrationStatus ? 
    'Регистрация прошла успешно!' : 'Рады видеть!'
  useEffect(() => {

    setUserEmailClass(true);

  }, []);

  const userEmailLableClass = userEmailClass ? 'entry__user-email-lable entry__user-email-lable_signin' : 'entry__user-email-lable'
  const handleMail = (e) => {setMail(e.target.value)}
  const handlePass = (e) => {setPassword(e.target.value)}

  function handleAuthorization(e) {
    e.preventDefault()

    props.auth({
      mail: mail,
      password: password
    })

  }

  return (
    <>
    <Header component={navigation} />
    <form className="entry" onSubmit={handleAuthorization}>
      <h2 className="entry__welcome">{welcomeText}</h2>
      <lable className={userEmailLableClass}>E-mail</lable>
      <input type="text" className="entry__user-email-input"
        onChange={handleMail}
        required/>
      <lable className="entry__user-password-lable">Пароль</lable>
      <input type="password" className="entry__user-password-input"
        onChange={handlePass}
        required/>
      <span className="entry__input-error" >Что-то пошло не так...</span>

      <input type="submit" className="entry__submit" value="Войти"/>
      <h2 className="entry__check-text">Ещё не зарегистрированы? <Link
		  className="entry__check-link" to="/signup">Регистрация</Link></h2>
    </form>
    </>
  );
}
