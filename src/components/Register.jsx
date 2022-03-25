import React, { useState, useEffect } from 'react';
import {
  Link,
} from "react-router-dom";
import Header from './Header.jsx'
import FromValidator from "./FromValidator.jsx";
import {
  REGEX
} from '../utils/utils.js'
const {PASS_REGEX, EMAIL_REGEX, NAME_REGEX} = REGEX
function navigation() {
  return false;
}

export default function Register(props) {

  const stateSchema = {
    userName: { value: "", error: "" },
    userEmail: { value: "", error: "" },
    userPassword: { value: "", error: "" }
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
    },
    userPassword: {
      required: true,
      validator: {
        func: value => PASS_REGEX.test(value),
        error: "Неверный формат пароля"
      }
    }
  };


  function onSubmitForm(state) {
    props.auth({
      name: state.userName,
      email: state.userEmail,
      password: state.userPassword
    })
  }

  const { values, errors, handleOnChange, handleOnSubmit, disable } = FromValidator(
    stateSchema,
    stateValidatorSchema,
    onSubmitForm
  );

  const { userName, userEmail, userPassword } = values;

  function renderError() {
    return(
        'Что-то пошло не так при отправке запроса...'
      )
  }


  return (
    <>
    <Header component={navigation}/>
    <form className="entry" onSubmit={handleOnSubmit}>
      <h2 className="entry__welcome">Добро пожаловать!</h2>
      <lable className="entry__user-name-lable">Имя
        <input type="text" 
          className="entry__user-name-input" 
          onChange={e => handleOnChange(e)}
          onBlur={e => handleOnChange(e)}
          name="userName"
          value={userName}
          />
      </lable>
      {errors.userName && <span className="entry__input-error" >{errors.userName}</span>}

      <lable className="entry__user-email-lable">E-mail
        <input type="text" className="entry__user-email-input"
          onChange={e => handleOnChange(e)}
          onBlur={e => handleOnChange(e)}
          name="userEmail"
          value={userEmail}
          />
      </lable>
      {errors.userEmail && <span className="entry__input-error" >{errors.userEmail}</span>}

      <lable className="entry__user-password-lable">Пароль
        <input type="password" className="entry__user-password-input"
          onChange={e => handleOnChange(e)}
          onBlur={e => handleOnChange(e)}
          name="userPassword"
          value={userPassword}
          />
      </lable>
      {errors.userPassword && <span className="entry__input-error" >{errors.userPassword}</span>}

      <span className="entry__input-error" >{props.registrationError ? renderError() : ''}</span>

      <input type="submit" className="entry__submit" value="Зарегистрироваться" disabled={disable}/>
      <h2 className="entry__check-text">Уже зарегистрированы? <Link
  	  className="entry__check-link" to="/signin">Войти</Link></h2>
    </form>
    </>
  );
}
