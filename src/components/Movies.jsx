import React, { useContext } from 'react';
import SearchForm from './SearchForm.jsx'
import MoviesCardList from './MoviesCardList.jsx'

export default function Movies() {
  return (
    <main >
      <SearchForm />
      <MoviesCardList/>
    </main>
  );
}
