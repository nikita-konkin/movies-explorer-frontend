import React from 'react';
import arrowImg from '../images/src_arrow.svg'
export default function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <div className="portfolio__container">
        <div className="portfolio__link-container">
          <a href="url" className="portfolio__link">Статичный сайт</a>
          <img src={arrowImg}  className="portfolio__link-arrow"></img>
        </div>
        <div className="portfolio__link-container">
          <a href="url"  className="portfolio__link">Адаптивный сайт</a>
          <img src={arrowImg} className="portfolio__link-arrow"></img>
        </div>
        <div className="portfolio__link-container">
          <a href="url"  className="portfolio__link">Одностраничное приложение</a>
          <img src={arrowImg} className="portfolio__link-arrow"></img>
        </div>
      </div>
    </div>
  );
}
