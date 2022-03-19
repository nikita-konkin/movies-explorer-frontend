import React, { useState } from 'react';
import {
  Link,
} from "react-router-dom";
import Header from './Header.jsx'

function navigation() {
  return false;
}

export default function Register(props) {

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  function handleAuthorization(e){
    e.preventDefault()

    props.auth({
      name: name,
      mail: mail,
      password: password
    })

  }

  const handleName = (e) => {setName(e.target.value)}
  const handleMail = (e) => {setMail(e.target.value)}
  const handlePass = (e) => {setPassword(e.target.value)}

  return (
    <>
    <Header component={navigation}/>
    <form className="entry" onSubmit={handleAuthorization}>
      <h2 className="entry__welcome">Добро пожаловать!</h2>
      <lable className="entry__user-name-lable">Имя</lable>
      <input type="text" 
        className="entry__user-name-input" 
        onChange={handleName}
        required/>
      <lable className="entry__user-email-lable">E-mail</lable>
      <input type="text" className="entry__user-email-input"
        onChange={handleMail}
        required/>
      <lable className="entry__user-password-lable">Пароль</lable>
      <input type="password" className="entry__user-password-input"
        onChange={handlePass}
        required/>
      <span className="entry__input-error" >Что-то пошло не так...</span>

      <input type="submit" className="entry__submit" value="Зарегистрироваться"/>
      <h2 className="entry__check-text">Уже зарегистрированы? <Link
  	  className="entry__check-link" to="/signin">Войти</Link></h2>
    </form>
    </>
  );
}
