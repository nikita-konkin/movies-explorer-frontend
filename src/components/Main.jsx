import React from 'react';
import Promo from './Promo.jsx'
import AboutProject from './AboutProject.jsx'
import Techs from './Techs.jsx'
import AboutMe from './AboutMe.jsx'
import Portfolio from './Portfolio.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import {
  Link,
  NavLink,
} from "react-router-dom";

export default function Main() {

  function navigation() {
    return (
        <nav className="navigation">
          <NavLink className="navigation__link" to="/signup">Регситрация</NavLink>
          <NavLink className="navigation__link-signin" to="/signin">Войти</NavLink>
        </nav>
    )

  }

  return (
    <>
      <Header component={navigation}/>
      <main className="main">
        {<Promo />}
        {<AboutProject />}
        {<Techs />}
        {<AboutMe />}
        {<Portfolio />}
      </main>
      <Footer />
    </>
  );
}
