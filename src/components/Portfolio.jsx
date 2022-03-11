import React from 'react';
import arrowImg from '../images/src_arrow.svg'
export default function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <div className="portfolio__container">
        <div className="portfolio__link-container">
          <a href="https://github.com/nikita-konkin/how-to-learn" className="portfolio__link" target="_blank">Статичный сайт</a>
          <img src={arrowImg}  className="portfolio__link-arrow"></img>
        </div>
        <div className="portfolio__link-container">
          <a href="https://github.com/nikita-konkin/russian-travel"  className="portfolio__link" target="_blank">Адаптивный сайт</a>
          <img src={arrowImg} className="portfolio__link-arrow"></img>
        </div>
        <div className="portfolio__link-container">
          <a href="https://github.com/nikita-konkin/react-mesto-api-full"  className="portfolio__link" target="_blank">Одностраничное приложение</a>
          <img src={arrowImg} className="portfolio__link-arrow"></img>
        </div>
      </div>
    </div>
  );
}
