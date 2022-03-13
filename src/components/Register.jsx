import React, { useContext } from 'react';
import {
  Link,
} from "react-router-dom";
import Header from './Header.jsx'

function navigation() {
  return false;
}

export default function Register() {
  return (
    <>
    <Header component={navigation}/>
    <main className="entry">
      <h2 className="entry__welcome">Добро пожаловать!</h2>
      <lable className="entry__user-name-lable">Имя</lable>
      <input type="text" className="entry__user-name-input" required/>
      <lable className="entry__user-email-lable">E-mail</lable>
      <input type="text" className="entry__user-email-input" required/>
      <lable className="entry__user-password-lable">Пароль</lable>
      <input type="password" className="entry__user-password-input" required/>
      <span className="entry__input-error" >Что-то пошло не так...</span>

      <input type="submit" className="entry__submit" value="Зарегистрироваться"/>
      <h2 className="entry__check-text">Уже зарегистрированы? <Link
		  className="entry__check-link" to="/signin">Войти</Link></h2>
    </main>
    </>
  );
}
