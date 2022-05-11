import React, {  useState, useEffect } from 'react'

export default function Preloader (props) {

    
    useEffect(() => { props.refreshPreloadStatus(props.saved)}, [props.resetPreloadCounter])
    useEffect(() => { props.resetPreloadCounter() }, [])

    function setPreload(){
        props.preload(true)
        props.refreshPreloadStatus(props.saved)
    }

    function preloadBtn() {
      if (props.cardsArraySize === 0){
          return (
          <span className="preloader__round" >Ничего не найдено</span>
          )
      } else {
         if (props.preloadStatus) {
          return (
                  <span className="preloader__round" >Больше фильмов нет...</span>
                  )
         } else {
              return(
                  <span className="preloader__round" onClick={setPreload}>Еще</span>
                  )
         }
      }
    }

    return (
        <div className="preloader">
            <div className="preloader__container">
                {preloadBtn()}
            </div>
        </div>
    )
};


