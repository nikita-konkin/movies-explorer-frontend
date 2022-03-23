import React from 'react'
import MoviesCard from './MoviesCard.jsx'


export default function MoviesCardList(props){
  const url = 'https://api.nomoreparties.co'
  // console.log(props.cardsArray)
  function handleSavedMovieaArray() {
    return(
      <section className="cards" aria-label="article">
        {props.cardsArray.slice(0, props.pageCardsCount + props.pageCardsPreload).map(card => 
          (<MoviesCard
          card={card}
          saveFilm={props.saveFilm}
          deleteFilm = {props.deleteFilm}
          key={props.saved ? card.movieId : card.id}
          saved={props.saved}
          />))}
      </section>
    )
  }

  function handleMovieaArray(){


    return(
      <section className="cards" aria-label="article">
        {props.cardsArray.slice(0, props.pageCardsCount + props.pageCardsPreload).map(card => 
          (<MoviesCard
          card={card}
          saveFilm={props.saveFilm}
          deleteFilm = {props.deleteFilm}
          key={props.saved ? card.movieId : card.id}
          saved={props.saved}
          />))}

      </section>

      )
  }


  return(
    //     <section className="cards" aria-label="article">
    //   {props.cardsArray.slice(0, props.pageCardsCount + props.pageCardsPreload).map(card => 
    //     props.savedCardsArray.map(savedCard => savedCard.movieId === card.id ?
    //       cardSection(savedCard) : cardSection(card) )

    //     )}
    // </section>
    <>
    {props.saved ? handleSavedMovieaArray() : handleMovieaArray()}
    </>
  )
}
