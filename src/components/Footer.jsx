import React, { useContext } from 'react';



export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__signature">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2022</p>
        <a className="footer__link" href="https://practicum.yandex.ru" target="_blank">Яндекс.Практикум</a>
        <a className="footer__link" href="https://github.com/nikita-konkin/movies-explorer-frontend" target="_blank">Github</a>
        <a className="footer__link" href="https://www.facebook.com/" target="_blank">Facebook</a>
      </div>
    </footer>
  );
}
