import React, { useContext, useState, useEffect } from 'react';

export default function MoviesCard(props) {

  const url = 'https://api.nomoreparties.co'

  function durationCounter() {
    var time = ''
    const hour = (props.card.duration - (props.card.duration % 60)) / 60
    const min = props.card.duration % 60
    hour != 0 ? time = `${hour}ч ${min}м` : time = `${min}м`

    return time
  }

  function handleDelete() {
    props.deleteFilm(props.card._id)
  }

  function renderSaveBtn(){
    if (!props.card.saved) {
      return(
        <button className="card__save" onClick={onSaveFilmBtn}>Сохранить</button>
      )
    }
  }

  function handleClick() {
    window.open(props.card.trailerLink, '_blank');
  }

  const cardDeleteButtonClassName = (
    `${props.card.saved && props.saved ? 'card__delete' : `${props.card.saved ? `card__like card__like_liked`:`card__like` }`}`
  );

  function onSaveFilmBtn(){
    props.saveFilm(props.card, url)
  }
  return (
    <div className="card" id={props.card.id}>
      <img className="card__image"
        src={props.saved || props.card.saved ? props.card.image : url+props.card.image.url}
        onClick={handleClick}
        />
      <div className="card__title-container">
        <h2 className="card__title">{props.card.nameRU}</h2>
        <h3 className="card__movie-duration">{durationCounter()}</h3>
        <button type="button" className={`${cardDeleteButtonClassName}`} onClick={handleDelete}></button>
      </div>
      {renderSaveBtn()}
    </div>
  )
}
