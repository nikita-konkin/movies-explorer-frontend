import React, { useContext } from 'react';
import Navigation from './Navigation.jsx'
import logMovie from '../images/logo_movie.svg';


export default function Header() {
  return (
    <header className="header">
      <img src={logMovie} className="header__logo" alt="Логотип" />
      <Navigation />
    </header>
  );
}
