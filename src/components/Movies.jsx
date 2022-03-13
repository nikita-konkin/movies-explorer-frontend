import React, { useContext } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import SearchForm from './SearchForm.jsx'
import MoviesCardList from './MoviesCardList.jsx'
import Preloader from './Preloader.jsx'
import Footer from './Footer.jsx'

export default function Movies(props) {
  return (
    <>
      <Header component = {Navigation}/>
      <SearchForm pullSerchData={props.pullSerchData}/>
      <MoviesCardList cardsArray={props.cardsArray}/>
      <Preloader />
      <Footer />
    </>

  );
}
