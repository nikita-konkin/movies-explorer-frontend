import React, { useContext } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import MoviesCardList from './MoviesCardList.jsx'
import SearchForm from './SearchForm.jsx'
import Footer from './Footer.jsx'

export default function SavedMovies(props) {

  const tempFilter = props.cardsArray.filter(value => value.id < 10);
  const tempSaved = true;

  return (
    <>
      <Header component = {Navigation}/>
      <SearchForm />
      <MoviesCardList cardsArray={tempFilter} tempSaved={tempSaved}/>
      <Footer />
    </>
  );
}
