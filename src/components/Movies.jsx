import React, { useContext, useState, useEffect } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import SearchForm from './SearchForm.jsx'
import MoviesCardList from './MoviesCardList.jsx'
import Preloader from './Preloader.jsx'
import Footer from './Footer.jsx'

export default function Movies(props) {

  const [pageCardsCount, SetPageCardsCount] = useState()
  const [pageCardsPreload, SetPageCardsPreload] = useState(0)
  // const [isPreload, SetIsPreload] = useState(false)
  const [windoWidth, setWindoWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => setWindoWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    cardsCount()

  });


  function cardsCount(){

    if (windoWidth > 768) {
      SetPageCardsCount(12)
    } else if(windoWidth > 320) {
      SetPageCardsCount(8)
    } else if (windoWidth <= 320) {
      SetPageCardsCount(5)
    }

  }

  function preload(set) {

    if (set & windoWidth > 768) {
      SetPageCardsPreload(pageCardsPreload + 4)
    } else if(set & windoWidth <= 768) {
      SetPageCardsPreload(pageCardsPreload + 2)
    }
  }

  
  return (  
    <>
      <Header component = {Navigation}/>
      <SearchForm pullSerchData={props.pullSerchData}/>
      <MoviesCardList 
        cardsArray={props.cardsArray}
        pageCardsCount={pageCardsCount}
        pageCardsPreload={pageCardsPreload}
        />
      <Preloader preload={preload}/>
      <Footer />
    </>

  );
}
