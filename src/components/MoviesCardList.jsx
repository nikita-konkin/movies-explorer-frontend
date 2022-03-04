import React from 'react'
import MoviesCard from './MoviesCard.jsx'


export default function MoviesCardList(props){
  console.log(props.cardsArray);
  const url = 'https://www.newstatesman.com/wp-content/uploads/sites/2/2021/12/2ATHYW0-1038x778.jpg'
  return(
    <section className="cards" aria-label="article">
      {props.cardsArray.map(card => (<MoviesCard
        id={card.id}
        nameRU={card.nameRU}
        image={url}
        duration={card.duration}
        tempSaved={props.tempSaved}
        />))}
    </section>
  )
}
