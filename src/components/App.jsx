import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";
import {
  api
} from '../utils/api.js'

import Movies from './Movies.jsx'
import SavedMovies from './SavedMovies.jsx'
import Profile from './Profile.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Navigation from './Navigation.jsx'

export default function App() {

  const [cardsArray, setCardsArray] = useState([])

  useEffect(() => {

    refreshCardsData()

  }, []);

  function refreshCardsData() {
    api.getInitialCards().then(data => {
      setCardsArray(data)

    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className = "root">
      <Header component = {Navigation}/>
      <Routes>
        <Route path="movies" element={<Movies cardsArray = {cardsArray} />} />
        <Route path="saved-movies" element={<SavedMovies />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )

}
