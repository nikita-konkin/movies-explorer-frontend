import React, { useContext, useState } from 'react';

export default function MoviesCard(props) {

  const [like, setlike] = useState(false)

  function durationCounter() {
    var time = ''
    const hour = (props.duration - (props.duration % 60)) / 60
    const min = props.duration % 60
    hour != 0 ? time = `${hour}ч ${min}м` : time = `${min}м`

    return time
  }

  function handleLike() {
    setlike(!like)
  }

  function renderSaveBtn(){
    if (!props.tempSaved) {
      return(
        <h3 className="card__save">Сохранить</h3>
      )
    }
  }

  const cardLikeButtonClassName = (
    `${props.tempSaved ? 'card__delete' : `card__like ${like ? 'card__like_liked' : ''}`}`
  );

  return (
    <div className="card" id={props.id}>
      <img className="card__image" src={props.image} />
      <div className="card__title-container">
        <h2 className="card__title">{props.nameRU}</h2>
        <h3 className="card__movie-duration">{durationCounter()}</h3>

        <button type="button" className={`${cardLikeButtonClassName}`} onClick={handleLike}></button>
      </div>
      {renderSaveBtn()}
    </div>
  )
}
