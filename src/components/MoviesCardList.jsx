import React from 'react'
import MoviesCard from './MoviesCard.jsx'


export default function MoviesCardList(props){
  const url = 'https://api.nomoreparties.co'

  function cardSection(card) {
    return(
      <MoviesCard
          card={card}
          saveFilm={props.saveFilm}
          key={props.saved ? card.movieId : card.id}
          saved={props.saved}
          />
      )
  }

  return(
        <section className="cards" aria-label="article">
      {props.cardsArray.slice(0, props.pageCardsCount + props.pageCardsPreload).map(card => 
        props.savedCardsArray.map(savedCard => savedCard.movieId === card.id ?
          cardSection(savedCard) : cardSection(card) )

        )}
    </section>

    // <section className="cards" aria-label="article">
    //   {props.cardsArray.slice(0, props.pageCardsCount + props.pageCardsPreload).map(card => 
    //     (<MoviesCard
    //     card={card}
    //     saveFilm={props.saveFilm}
    //     key={props.saved ? card.movieId : card.id}
    //     saved={props.saved}
    //     />))}
    // </section>
  )
}
