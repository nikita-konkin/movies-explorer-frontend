import React, { useContext } from 'react';
import Navigation from './Navigation.jsx'
import logMovie from '../images/logo_movie.svg';
import {
  NavLink,
} from "react-router-dom";

export default function Header(props) {

  const logoClass = props.component() ? `header__logo` : ` header__logo header__logo_displaced`
  const headerClass = props.setBackColor ? `header header_backcolor-blue` : props.component() ? `header` : `header header_displaced`

  return (
    <header className={headerClass}>
      <NavLink to="/"><img src={logMovie} className={logoClass} alt="Логотип" /></NavLink>
      {props.component()}
    </header>
  );
}
