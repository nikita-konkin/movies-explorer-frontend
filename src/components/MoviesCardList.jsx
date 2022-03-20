import React from 'react'
import MoviesCard from './MoviesCard.jsx'


export default function MoviesCardList(props){
  const url = 'https://api.nomoreparties.co'

  return(
    <section className="cards" aria-label="article">
      {props.cardsArray.slice(0, props.pageCardsCount + props.pageCardsPreload).map(card => (<MoviesCard
        card={card}
        saveFilm={props.saveFilm}
        tempSaved={props.tempSaved}
        key={card.id}
        />))}
    </section>
  )
}
