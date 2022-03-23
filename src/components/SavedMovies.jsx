import React, { useContext } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import MoviesCardList from './MoviesCardList.jsx'
import SearchForm from './SearchForm.jsx'
import Preloader from './Preloader.jsx'
import Footer from './Footer.jsx'

export default function SavedMovies(props) {

  function renderSavedMovie() {
    const cardsArray = props.mergeMovies([], props.savedCardsArray, true)
    const saved = true;
    
    return (

      <>
        <Header component = {Navigation}/>
        <SearchForm pullSerchData = {props.pullSerchData}/>
        <MoviesCardList
          cardsArray={cardsArray}
          pageCardsCount={props.pageCardsCount}
          pageCardsPreload={props.pageCardsPreload}
          saved = {saved}
          deleteFilm = {props.deleteFilm}

          />
        <Preloader
          preload={props.preload}
          preloadStatus={props.preloadStatus}
          refreshPreloadStatus={props.refreshPreloadStatus}
          saved={true}
          resetPreloadCounter={props.resetPreloadCounter}
          />
        <Footer />
      </>

      )
  }

  return (
    <>
      {renderSavedMovie()}
    </>
  );
}
