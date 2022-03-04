import React, { useContext } from 'react';
import Navigation from './Navigation.jsx'
import logMovie from '../images/logo_movie.svg';


export default function Header(props) {

  const logoClass = props.component() ? `header__logo` : `header__logo_displaced`
  const headerClass = props.component() ? `header` : `header_displaced`

  return (
    <header className={headerClass}>
      <img src={logMovie} className={logoClass} alt="Логотип" />
      {props.component()}
    </header>
  );
}
