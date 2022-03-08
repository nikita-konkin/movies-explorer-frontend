import React from 'react';
import landingLogo from '../images/landing_logo.svg';
import { scroller } from 'react-scroll'

export default function Promo() {

  function scrollTo(element) {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  function scrollToAboutProjext() {
    const element = 'about'
    scrollTo(element)
  }

  function scrollToTechs() {
    const element = 'techs'
    scrollTo(element)
  }

  function scrollToAboutMe() {
    const element = 'aboutme'
    scrollTo(element)
  }

  return (
    <div className="promo">
      <div className="promo__intro-container" >
        <h1 className="promo__header" >Учебный проект студента факультета Веб-разработки.</h1>

      </div>
      <div className="promo__menu">
        <a className="promo__menu-link" onClick={scrollToAboutProjext} >О проекте</a>
        <a className="promo__menu-link" onClick={scrollToTechs} >Технологии</a>
        <a className="promo__menu-link" onClick={scrollToAboutMe} >Студент</a>
      </div>
    </div>
  );
}
