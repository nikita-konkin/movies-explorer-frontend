import React, { useState, useEffect } from 'react';
import {
  Link,
} from "react-router-dom";
import Header from './Header.jsx'

function navigation() {
  return false;
}

export default function Login() {

  const [userEmailClass, setUserEmailClass] = useState(false)

  useEffect(() => {

    setUserEmailClass(true);

  }, []);

  const userEmailLableClass = userEmailClass ? 'entry__user-email-lable entry__user-email-lable_signin' : 'entry__user-email-lable'

  return (
    <>
    <Header component={navigation}/>
    <main className="entry">
      <h2 className="entry__welcome">Рады видеть!</h2>
      <lable className={userEmailLableClass}>E-mail</lable>
      <input type="text" className="entry__user-email-input"/>
      <lable className="entry__user-password-lable">Пароль</lable>
      <input type="password" className="entry__user-password-input"/>
      <span className="entry__input-error" >Что-то пошло не так...</span>

      <input type="submit" className="entry__submit" value="Зарегистрироваться"/>
      <h2 className="entry__check-text">Ещё не зарегистрированы? <Link
		  className="entry__check-link" to="/signup">Регистрация</Link></h2>
    </main>
    </>
  );
}
