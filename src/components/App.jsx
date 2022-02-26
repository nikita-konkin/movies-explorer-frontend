import React, {
  useContext
} from 'react';
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";
import Movies from './Movies.jsx'
import SavedMovies from './SavedMovies.jsx'
import Profile from './Profile.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Navigation from './Navigation.jsx'

export default function App() {

  return (
    <div className = "root">
      <Header component = {Navigation}/>
      <Routes>
        <Route path="movies" element={<Movies />} />
        <Route path="saved-movies" element={<SavedMovies />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )

}
