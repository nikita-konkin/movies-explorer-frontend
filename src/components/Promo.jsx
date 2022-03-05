import React from 'react';
import landingLogo from '../images/landing_logo.svg';

export default function Promo() {

  return (
    <div className="promo">
      <div className="promo__intro-container" >
        <h1 className="promo__header" >Учебный проект студента факультета Веб-разработки.</h1>

      </div>
      <div className="promo__menu">
        <a className="promo__menu-link" >О проекте</a>
        <a className="promo__menu-link" >Технологии</a>
        <a className="promo__menu-link" >Студент</a>
      </div>
    </div>
  );
}
