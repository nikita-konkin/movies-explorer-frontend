import React, { useContext, useState } from 'react';

export default function MoviesCard(props) {

  const [like, setlike] = useState(false)
  const url = 'https://api.nomoreparties.co'
  // console.log(props.card)
  function durationCounter() {
    var time = ''
    const hour = (props.card.duration - (props.card.duration % 60)) / 60
    const min = props.card.duration % 60
    hour != 0 ? time = `${hour}ч ${min}м` : time = `${min}м`

    return time
  }

  function handleLike() {
    setlike(!like)
  }

  function renderSaveBtn(){
    if (!props.card.saved) {
      return(
        <button className="card__save" onClick={onSaveFilmBtn}>Сохранить</button>
      )
    }
  }

  const cardDeleteButtonClassName = (
    // `${props.saved ? 'card__delete' : `card__like card__like_liked`}`
    `${props.card.saved && props.saved ? 'card__delete' : `${props.card.saved ? `card__like card__like_liked`:`card__like` }`}`
  );
  // const cardSaveButtonClassName = (
  //   `${props.saved ? 'card__save_disable' : `card__save`}`
  // );

  function onSaveFilmBtn(){
    props.saveFilm(props.card, url)
  }
  return (
    <div className="card" id={props.card.id}>
      <img className="card__image" src={props.saved || props.card.saved ? props.card.image : url+props.card.image.url} />
      <div className="card__title-container">
        <h2 className="card__title">{props.card.nameRU}</h2>
        <h3 className="card__movie-duration">{durationCounter()}</h3>
        <button type="button" className={`${cardDeleteButtonClassName}`} onClick={handleLike}></button>
      </div>
      {renderSaveBtn()}
    </div>
  )
}
