import React, { useContext } from 'react';
import SearchForm from './SearchForm.jsx'
import MoviesCardList from './MoviesCardList.jsx'
import Preloader from './Preloader.jsx'
import Footer from './Footer.jsx'

export default function Movies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList cardsArray={props.cardsArray}/>
      <Preloader />
      <Footer />
    </>

  );
}
