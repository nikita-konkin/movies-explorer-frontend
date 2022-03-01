import React, { useContext, useState } from 'react';

export default function MoviesCard() {

  return (
    <div className="card">
      <img className="card__image" src='https://nbcpalmsprings.com/wp-content/uploads/sites/8/2021/12/BEST-MOVIES-OF-2021.jpeg' />
      <div className="card__title-container">
        <h2 className="card__title">test name</h2>
        <div className="card__like-wrap">
          <button type="button" className="card__like"></button>
        </div>
      </div>
      <h3 className="card__movie-duration">1ч42м</h3>
    </div>
  )
}
