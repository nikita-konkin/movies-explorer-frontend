import React from 'react';
import landingLogo from '../images/landing_logo.svg';

export default function Promo() {
  return (
    <div className="promo">
      <div>
        <h1>Учебный проект студента факультета Веб-разработки.</h1>
        <img src={landingLogo} className="" alt="Лого" />
      </div>
      <div>
        <a className="" >О проекте</a>
        <a className="" >Технологии</a>
        <a className="" >Студент</a>
      </div>
    </div>
  );
}
