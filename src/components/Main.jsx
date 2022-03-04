import React from 'react';
import Promo from './Promo.jsx'
import AboutProject from './AboutProject.jsx'
import Techs from './Techs.jsx'
import AboutMe from './AboutMe.jsx'
import Portfolio from './Portfolio.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

export default function Main() {

  function navigation() {
    return true;
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
