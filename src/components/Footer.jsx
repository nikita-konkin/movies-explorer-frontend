import React, { useContext } from 'react';



export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__signature">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__copyright">© 2020</p>
        <p className="footer__link">Яндекс.Практикум</p>
        <p className="footer__link">Github</p>
        <p className="footer__link">Facebook</p>
      </div>
    </footer>
  );
}
