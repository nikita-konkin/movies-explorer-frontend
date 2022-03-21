import React, { useContext, useState, useEffect } from 'react';
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
      <MoviesCardList 
        cardsArray={props.cardsArray}
        pageCardsCount={props.pageCardsCount}
        pageCardsPreload={props.pageCardsPreload}
        savedCardsArray={props.savedCardsArray}
        saveFilm={props.saveFilm}
        />
      <Preloader preload={props.preload}/>
      <Footer />
    </>

  );
}
