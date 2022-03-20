import React, { useContext, useState } from 'react';

export default function MoviesCard(props) {

  const [like, setlike] = useState(false)
  const url = 'https://api.nomoreparties.co'

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

  // function renderSaveBtn(){
  //   if (!props.tempSaved) {
  //     return(
        
  //     )
  //   }
  // }

  const cardLikeButtonClassName = (
    `${props.tempSaved ? 'card__delete' : `card__like ${like ? 'card__like_liked' : ''}`}`
  );

  function onSaveFilmBtn(){
    props.saveFilm(props.card,  url)
  }
  return (
    <div className="card" id={props.card.id} key={props.card.id}>
      <img className="card__image" src={url+props.card.image.url} />
      <div className="card__title-container">
        <h2 className="card__title">{props.card.nameRU}</h2>
        <h3 className="card__movie-duration">{durationCounter()}</h3>
        <button type="button" className={`${cardLikeButtonClassName}`} onClick={handleLike}></button>
      </div>
      <button className="card__save" onClick={onSaveFilmBtn}>Сохранить</button>
    </div>
  )
}
