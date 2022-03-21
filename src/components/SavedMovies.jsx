import React, { useContext } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import MoviesCardList from './MoviesCardList.jsx'
import SearchForm from './SearchForm.jsx'
import Footer from './Footer.jsx'

export default function SavedMovies(props) {

  // const tempFilter = props.cardsArray.filter(value => value.id > 10);

  const saved = true;
  console.log(props.cardsArray)
  return (
    <>
      <Header component = {Navigation}/>
      <SearchForm />
      <MoviesCardList
        cardsArray={props.cardsArray}
        pageCardsCount={props.pageCardsCount}
        pageCardsPreload={props.pageCardsPreload}
        saved = {saved}
        />
      <Footer />
    </>
  );
}
