import React from 'react'
import MoviesCard from './MoviesCard.jsx'


export default function MoviesCardList(props){
  const url = 'https://api.nomoreparties.co'

  return(
    <section className="cards" aria-label="article">
      {props.cardsArray.slice(0, props.pageCardsCount + props.pageCardsPreload).map(card => (<MoviesCard
        id={card.id}
        nameRU={card.nameRU}
        image={url+card.image.url}
        duration={card.duration}
        tempSaved={props.tempSaved}
        />))}
    </section>
  )
}
