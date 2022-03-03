import React, { useContext, useState } from 'react';

export default function MoviesCard(props) {

  const [like, setlike] = useState(false)

  function durationCounter() {
    var time = ''
    const hour = (props.duration - (props.duration % 60)) / 60
    const min = props.duration % 60
    hour != 0 ? time = `${hour}ч${min}м` : time = `${min}м`

    return time
  }

  function handleLike() {
    setlike(!like)
  }

  const cardLikeButtonClassName = (
    `card__like ${like ? 'card__like_liked' : ''}`
  );


  return (
    <div className="card" id={props.id}>
      <img className="card__image" src={props.image} />
      <div className="card__title-container">
        <h2 className="card__title">{props.nameRU}</h2>
        <div className="card__like-wrap">
          <button type="button" className={`${cardLikeButtonClassName}`} onClick={handleLike}></button>
        </div>
      </div>
      <h3 className="card__movie-duration">{durationCounter()}</h3>
    </div>
  )
}
