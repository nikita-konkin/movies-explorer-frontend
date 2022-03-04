import React, { useContext } from 'react';



export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__signature">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__copyright">© 2020</p>
        <a className="footer__link" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
        <a className="footer__link" href="https://github.com/nikita-konkin/movies-explorer-frontend">Github</a>
        <a className="footer__link" href="https://www.facebook.com/">Facebook</a>
      </div>
    </footer>
  );
}
