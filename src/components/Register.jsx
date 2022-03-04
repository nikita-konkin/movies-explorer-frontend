import React, { useContext } from 'react';
import {
  Link,
} from "react-router-dom";


export default function Profile() {
  return (
    <main className="profile">
      <h2>Добро пожаловать!</h2>
      <lable>Имя</lable>
      <input/>
      <lable>E-mail</lable>
      <input/>
      <lable>Пароль</lable>
      <input/>
      <span>Что-то пошло не так...</span>

      <input type="submit"/>
      <h2 className="">Уже зарегистрированы? <Link
		  className="" to="/sign-in">Войти</Link></h2>

    </main>
  );
}
