import React, { useContext, useState, useEffect } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import SearchForm from './SearchForm.jsx'
import MoviesCardList from './MoviesCardList.jsx'
import Preloader from './Preloader.jsx'
import Footer from './Footer.jsx'

export default function Movies(props) {

  function renderMovie() {
    const cardsArray = props.useFilteredCard ? props.cardsArray : 
      props.mergeMovies(props.cardsArray, props.savedCardsArray)

  return (

    <>
    <Header component = {Navigation}/>
    <SearchForm pullSerchData={props.pullSerchData}  saved={false}/>
    <MoviesCardList 
      cardsArray={cardsArray}
      // savedCardsArray={props.savedCardsArray}
      pageCardsCount={props.pageCardsCount}
      pageCardsPreload={props.pageCardsPreload}
      saveFilm={props.saveFilm}
      deleteFilm = {props.deleteFilm}
      movieGetError={props.movieGetError}
      />
    <Preloader
      preload={props.preload}
      preloadStatus={props.preloadStatus}
      refreshPreloadStatus={props.refreshPreloadStatus}
      saved={false}
      resetPreloadCounter={props.resetPreloadCounter}
      cardsArraySize={cardsArray.length}
      />
    <Footer />
    </>

    )
  }
  
  return (  
    <>
    {renderMovie()}
    </>

  );
}
