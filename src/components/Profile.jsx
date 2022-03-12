import React, { useContext } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'

export default function Profile() {

  return (
    <>
    <Header component={Navigation}/>
    <main className="profile">
      <h2 className="profile__welcome">Привет, Никита!</h2>
      <div className="profile__name-input-container">
        <label htmlFor="profile__user-name" className="profile__name-input-lable">Имя</label>
        <input type="text"
          placeholder="Никита"
          name="search-box"
          id="profile__user-name"
          className="profile__user-name"/>
      </div>
      <div className="profile__email-input-container">
        <label htmlFor="profile__user-email" className="profile__email-input-lable">E-mail</label>
        <input type="text" placeholder="niki-konkin@yandex.ru"
          name="search-box"
          className="profile__user-email"
          id="profile__user-email"/>
      </div>
      <a className="profile__edit" href="">Редактировать</a>
      <a className="profile__logout" href="">Выйти из аккаунта</a>
    </main>
    </>
  );
}
