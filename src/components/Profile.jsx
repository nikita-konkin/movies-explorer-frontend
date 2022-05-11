import React, { useContext, useState } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import {CurrentUserContext} from '../context/CurrentUserContext.js'
import {
  mainApi
} from '../utils/MainApi.js'
import FromValidator from "./FromValidator.jsx";
import {
  REGEX
} from '../utils/utils.js'
const {NAME_REGEX, EMAIL_REGEX} = REGEX

export default function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentDisable, setCurrentDisable] = useState(false)

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setCurrentName(currentUser.name);
    setCurrentEmail(currentUser.email);
  }, [currentUser]);

  function logOutUser() {
    console.log('logOut')
    props.logOut()
  }

  const stateSchema = {
    userName: { value: name, error: "" },
    userEmail: { value: email, error: "" }
  };

  const stateValidatorSchema = {
    userName: {
      required: true,
      validator: {
        func: value => NAME_REGEX.test(value),
        error: "Неверный формат имени"
      }
    },
    userEmail: {
      required: true,
      validator: {
        func: value => EMAIL_REGEX.test(value),
        error: "Неверный формат почты"
      }
    }
  };

  function onSubmitForm(state) {
    props.updateUserProfile(state.userName, state.userEmail)
  }

  const { values, errors, handleOnChange, handleOnSubmit, disable } = FromValidator(
    stateSchema,
    stateValidatorSchema,
    onSubmitForm
  );

  const { userName, userEmail} = values;

  function renderUserUpdate () {
    return (
      props.profileUpdateStatus ? `Данные обновлены! Привет, ${currentUser.name}` :
      `Привет, ${currentUser.name}`
      )
  }

  function handleName(e) {
    setName(e.target.value)
    handleOnChange(e)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
    handleOnChange(e)
  }

  React.useEffect(() => {
    name != currentName || email != currentEmail ? setCurrentDisable(false) : setCurrentDisable(true)
  }, [handleName, handleEmail]);

  return (
    <>
    <Header component={Navigation}/>
    <form className="profile" onSubmit={e => handleOnSubmit(e)}>
      <h2 className="profile__welcome">{renderUserUpdate()}</h2>
      <div className="profile__name-input-container">
        <label htmlFor="profile__user-name" className="profile__name-input-lable">Имя</label>
        <input type="text"
          // placeholder={currentUser.name}
          name="userName"
          value={name || ''}
          id="profile__user-name"
          className="profile__user-name"
          onChange={e => handleName(e)}
          // onChange={e => handleOnChange(e)}
          />
      </div>
      <div className="profile__email-input-container">
        <label htmlFor="profile__user-email" className="profile__email-input-lable">E-mail</label>
        <input type="text"
          // placeholder={currentUser.email}
          className="profile__user-email"
          id="profile__user-email"
          onChange={e => handleEmail(e)}
          name="userEmail"
          value={email || ''}
          />
      </div>
      {errors.userName && <span className="entry__input-error" >{errors.userName}</span>}
      {errors.userEmail && <span className="entry__input-error" >{errors.userEmail}</span>}
      <input type = "submit" className="profile__edit" value="Редактировать" disabled={currentDisable ? true : disable}/>
      <input type = "button" className="profile__logout" value="Выйти из аккаунта" onClick={logOutUser} />
    </form>
    </>
  );
}
