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
    // console.log(cardsArray)
    return (

      <>
        <Header component = {Navigation}/>
        <SearchForm pullSerchData = {props.pullSerchData} saved={true}/>
        <MoviesCardList
          cardsArray={cardsArray}
          pageCardsCount={props.pageCardsCount}
          pageCardsPreload={props.pageCardsPreload}
          saved = {saved}
          deleteFilm = {props.deleteFilm}
          movieGetError = {props.movieGetError}
          search={props.search}
          />
        <Preloader
          preload={props.preload}
          preloadStatus={props.preloadStatus}
          refreshPreloadStatus={props.refreshPreloadStatus}
          saved={true}
          resetPreloadCounter={props.resetPreloadCounter}
          cardsArraySize={cardsArray.length}
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
