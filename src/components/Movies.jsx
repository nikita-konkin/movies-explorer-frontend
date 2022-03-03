import React, { useContext } from 'react';
import SearchForm from './SearchForm.jsx'
import MoviesCardList from './MoviesCardList.jsx'
import Preloader from './Preloader.jsx'

export default function Movies(props) {
  return (
    <main >
      <SearchForm />
      <MoviesCardList cardsArray={props.cardsArray}/>
      <Preloader />
    </main>
  );
}
