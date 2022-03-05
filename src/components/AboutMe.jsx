import React from 'react';
import myFoto from '../images/my_foto.png';

export default function AboutMe() {



  return (
    <div className="aboutme">
      <h2 className="aboutme__header">Студент</h2>
      <div className="aboutme__info-container">
          <h2 className="aboutme__info-name">Никита</h2>
          <h3 className="aboutme__info-job">Фронтенд-разработчик, 30 лет</h3>
          <p className="aboutme__info-story">Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <img src={myFoto} className="aboutme__foto" alt="Никита"/>
          <div className="aboutme__link">
            <a className="aboutme__link-fb">Facebook</a>
            <a className="aboutme__link-gh">Github</a>
          </div>

      </div>
    </div>
  );
}
