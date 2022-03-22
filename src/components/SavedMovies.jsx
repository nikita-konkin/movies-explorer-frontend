import React, { useContext } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import MoviesCardList from './MoviesCardList.jsx'
import SearchForm from './SearchForm.jsx'
import Footer from './Footer.jsx'

export default function SavedMovies(props) {

  function renderSavedMovie() {
    const cardsArray = props.mergeMovies(props.cardsArray, props.savedCardsArray, true)
    const saved = true;
    
    return (

      <>
        <Header component = {Navigation}/>
        <SearchForm />
        <MoviesCardList
          cardsArray={cardsArray}
          pageCardsCount={props.pageCardsCount}
          pageCardsPreload={props.pageCardsPreload}
          saved = {saved}
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
