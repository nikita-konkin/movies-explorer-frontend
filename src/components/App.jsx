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
  moviesApi
} from '../utils/MoviesApi.js'
import {
  mainApi
} from '../utils/MainApi.js'

import Movies from './Movies.jsx'
import SavedMovies from './SavedMovies.jsx'
import Profile from './Profile.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import NotFound from './NotFound.jsx'
import Main from './Main.jsx'

export default function App() {

  const [cardsArray, setCardsArray] = useState([])

  // useEffect(() => {
  //
  //   refreshCardsData()
  //
  // }, []);

  function findCards(request, short) {
    console.log(request);
    moviesApi.getInitialCards().then(data => {

      const dataFiltered = data
        .filter(value => value.nameRU.toLowerCase().includes(request));
      const dataFilteredShort = dataFiltered
        .filter(value => value.duration <= 40);
      short ? setCardsArray(dataFilteredShort) : setCardsArray(dataFiltered)


    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className = "root">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="movies"
          element={<Movies
            cardsArray = {cardsArray}
            pullSerchData = {findCards}
            />} />
        <Route path="saved-movies" element={<SavedMovies cardsArray = {cardsArray} />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<Register />} />
        <Route path="signin" element={<Login />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
    </div>
  )

}
