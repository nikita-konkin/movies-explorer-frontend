import React, { useState, useEffect } from 'react';
import {
  Link,
} from "react-router-dom";
import Header from './Header.jsx'
import FromValidator from "./FromValidator.jsx";
import {
  REGEX
} from '../utils/utils.js'
const {PASS_REGEX, EMAIL_REGEX} = REGEX

function navigation() {
  return false;
}

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userEmailClass, setUserEmailClass] = useState(false)
  const welcomeText = props.registrationStatus ? 
    'Регистрация прошла успешно!' : 'Рады видеть!'
  useEffect(() => {

    setUserEmailClass(true);

  }, []);

  const userEmailLableClass = userEmailClass ? 'entry__user-email-lable entry__user-email-lable_signin' : 'entry__user-email-lable'

  const stateSchema = {
    userEmail: { value: "", error: "" },
    userPassword: { value: "", error: "" }
  };

  const stateValidatorSchema = {
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
        error: "Неверный формат пароля, необходим верхний и нижний регистр и цифры"
      }
    }
  };


  function onSubmitForm(state) {
    props.auth({
      email: state.userEmail,
      password: state.userPassword
    })
  }

  const { values, errors, handleOnChange, handleOnSubmit, disable } = FromValidator(
    stateSchema,
    stateValidatorSchema,
    onSubmitForm
  );

  const { userEmail, userPassword } = values;

  function renderError() {
    return(
        'Неправильные почта или пароль'
      )
  }

  function handleEmail(e) {
    setEmail(e.target.value)
    handleOnChange(e)
  }
  function handlePassword(e){
    setPassword(e.target.value)
    handleOnChange(e)
  }

  return (
    <>
    <Header component={navigation} />
    <form className="entry" onSubmit={handleOnSubmit}>
      <h2 className="entry__welcome">{welcomeText}</h2>
      <lable className={userEmailLableClass}>E-mail
      <input type="text" className="entry__user-email-input"
        name="userEmail"
        onChange={e => handleEmail(e)}
        value={email}
        required/>
      </lable>
      {errors.userEmail && <span className="entry__input-error" >{errors.userEmail}</span>}
      <lable className="entry__user-password-lable">Пароль
      <input type="password" className="entry__user-password-input"
        name="userPassword"
        onChange={e => handlePassword(e)}
        value={password}
        required/>
      </lable>
      {errors.userPassword && <span className="entry__input-error" >{errors.userPassword}</span>}

      <input type="submit" className="entry__submit" value="Войти" disabled={disable}/>
      <span className="entry__input-error" >{props.authorizationError ?  renderError() : ''}</span>
      <h2 className="entry__check-text">Ещё не зарегистрированы? <Link
		  className="entry__check-link" to="/signup">Регистрация</Link></h2>
    </form>
    </>
  );
}
