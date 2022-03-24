import React, { useState, useEffect } from 'react';
import {
  Link,
} from "react-router-dom";
import Header from './Header.jsx'
import FromValidator from "./FromValidator.jsx";

function navigation() {
  return false;
}

export default function Register(props) {

  // const [name, setName] = useState('')
  // const [mail, setMail] = useState('')
  // const [password, setPassword] = useState('')
  // const [all, setAll] = useState(false)
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const strongEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const stateSchema = {
    userName: { value: "", error: "" },
    userEmail: { value: "", error: "" },
    userPassword: { value: "", error: "" }
  };

  const stateValidatorSchema = {
    userName: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Неверный формат имени"
      }
    },
    userEmail: {
      required: true,
      validator: {
        func: value => strongEmail.test(value),
        error: "Неверный формат почты"
      }
    },
    userPassword: {
      required: true,
      validator: {
        func: value => strongRegex.test(value),
        error: "Неверный формат пароля"
      }
    }
  };

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

  // function onSubmitForm(state) {
  //   // e.preventDefault()

  //   props.auth({
  //     name: state.userName,
  //     mail: state.userEmail,
  //     password: state.userPassword
  //   })
  // }

  const { values, errors, handleOnChange, handleOnSubmit, disable } = FromValidator(
    stateSchema,
    stateValidatorSchema,
    onSubmitForm
  );

  useEffect(() => {
    
  }, []);
  const { userName, userEmail, userPassword } = values;

  function renderError() {
    return(
        'Что-то пошло не так...'
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
          onChange={handleOnChange}
          name="userName"
          value={userName}
          required/>
      </lable>
      {errors.userName && <span className="entry__input-error" >{errors.userName}</span>}

      <lable className="entry__user-email-lable">E-mail
        <input type="text" className="entry__user-email-input"
          onChange={handleOnChange}
          name="userEmail"
          value={userEmail}
          required/>
      </lable>
      {errors.userEmail && <span className="entry__input-error" >{errors.userEmail}</span>}

      <lable className="entry__user-password-lable">Пароль
        <input type="password" className="entry__user-password-input"
          onChange={handleOnChange}
          name="userPassword"
          value={userPassword}
          required/>
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
