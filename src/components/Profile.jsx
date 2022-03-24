import React, { useContext, useState } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import {CurrentUserContext} from '../context/CurrentUserContext.js'
import {
  mainApi
} from '../utils/MainApi.js'

export default function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function updateProfile(e) {
    e.preventDefault();
    props.updateUserProfile(name, email)
  }

  function logOutUser() {
    console.log('logOut')
    props.logOut()
  }

  return (
    <>
    <Header component={Navigation}/>
    <form className="profile" onSubmit={e => updateProfile(e)}>
      <h2 className="profile__welcome">Привет, {currentUser.name}</h2>
      <div className="profile__name-input-container">
        <label htmlFor="profile__user-name" className="profile__name-input-lable">Имя</label>
        <input type="text"
          value={name || ''}
          placeholder={currentUser.name}
          name="search-box"
          id="profile__user-name"
          className="profile__user-name"
          onInput={e => setName(e.target.value)}
          required/>
      </div>
      <div className="profile__email-input-container">
        <label htmlFor="profile__user-email" className="profile__email-input-lable">E-mail</label>
        <input type="text"
          value={email || ''}
          placeholder={currentUser.email}
          name="search-box"
          className="profile__user-email"
          id="profile__user-email"
          onInput={e => setEmail(e.target.value)}
          required/>
      </div>
      <input type = "submit" className="profile__edit" value="Редактировать" />
      <input type = "button" className="profile__logout" value="Выйти из аккаунта" onClick={logOutUser} />
    </form>
    </>
  );
}
