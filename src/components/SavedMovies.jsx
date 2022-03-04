import React, { useContext } from 'react';
import MoviesCardList from './MoviesCardList.jsx'
import SearchForm from './SearchForm.jsx'
import Footer from './Footer.jsx'

export default function SavedMovies(props) {

  const tempFilter = props.cardsArray.filter(value => value.id < 10);
  const tempSaved = true;

  return (
    <>
      <SearchForm />
      <MoviesCardList cardsArray={tempFilter} tempSaved={tempSaved}/>
      <Footer />
    </>
  );
}
