import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import {
  CurrentUserContext
} from '../context/CurrentUserContext.js'
import ProtectedRoute from "./ProtectedRoute";
import {
  Link,
  Routes,
  Route,
  useNavigate
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
  const [savedCardsArray, setSavedCardsArray] = useState([])
  const [cardsArrayFiltered, setCardsArrayFiltered] = useState([])
  
  const [useFilteredCard, setUseFilteredCard] = useState(false)
  // const [start, setStart] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  // const [loggedIn, setLoggedIn] = useState(false)
  const [registrationStatus, setRegistrationStatus] = useState(false)
  // const [stayOnCurrentPage, setStayOnCurrentPage] = useState(false)
  // const logged = localStorage.getItem('loggedIn')
  const token = localStorage.getItem("token");
  const loggedIn = localStorage.getItem("loggedIn");

  const [pageCardsCount, SetPageCardsCount] = useState()
  const [pageCardsPreload, SetPageCardsPreload] = useState(0)
  // const [isPreload, SetIsPreload] = useState(false)
  const [windoWidth, setWindoWidth] = useState(window.innerWidth)


  const now = new Date()
  const navigate = useNavigate();


  useEffect(() => {
    
    if (token) {

      mainApi.handleTokenValidation(token).then(data => {
        handleLogin()
      }).catch(err => {
        console.log(err)
      })

    }

  }, []);



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

  function refreshCardsData(){
    moviesApi.getInitialCards().then(data => {
      setCardsArray(data)
    }).catch(err => {
      console.log(err)
    })

  }
  function refreshSavedCardsData(){
    mainApi.getSavedFilms().then(data => {
      setSavedCardsArray(data.data)
    }).catch(err => {
      console.log(err)
    })

  }

  function handleRegistration(data) {

    mainApi.handleRegistration(data.name, data.password, data.mail)
      .then(data => {
        setRegistrationStatus(true)
      }).catch(err => {
        console.log(err)
      })
      // .finally(() => {
      //   setInfoTooltipState(true)
      // })
  }
  
  function handleAuthorization(data) {

    mainApi.handleAuthorization(data.mail, data.password)
      .then(auth => {
        localStorage.setItem('token', auth.token);
        handleLogin()
        navigate('/movies')
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleLogin() {

    // const loggedIn = {
    //   value: true,
    //   expiry: now.getTime() + 60000,
    // }
    localStorage.setItem('loggedIn', true)
    // localStorage.setItem('loggedIn', JSON.stringify(loggedIn))
    // setStayOnCurrentPage ? '' : navigate('/movies')

    // refreshProfileData()
    refreshCardsData()
    refreshSavedCardsData()
    replace()
  }

  function refreshProfileData(){
    mainApi.getProfileData().then(data => {
      setCurrentUser(data.data)
    }).catch(err => {
      console.log(err)
    });
  }

  function findCards(request, short) {
    console.log(request);

    if (request != ""){
      setUseFilteredCard(true)
      const dataFiltered = cardsArray
        .filter(value => value.nameRU.toLowerCase().includes(request));
      const dataFilteredShort = dataFiltered
        .filter(value => value.duration <= 40);
      short ? setCardsArrayFiltered(dataFilteredShort) : setCardsArrayFiltered(dataFiltered)
    } else {
      setUseFilteredCard(false)
    }

  }

  function saveFilm(card, serverUrl) {
    mainApi.saveFilm(card, serverUrl).then(res => {
      if (res.data.matchedCount > 0) {
        addOwner(card.id)
      }
      refreshSavedCardsData()
    }).catch(err => {
      console.log(err)
    });
  }

  function replace() {
    const updatedHeaders = cardsArray.map((obj, index) => {
      obj
      // console.log(obj.id)
    });
    console.log('updatedHeaders')
    console.log(updatedHeaders)
  }
  console.log(cardsArray)
  console.log(savedCardsArray)
  function addOwner(movieId){
    mainApi.addOwner(movieId).catch(err => {
      console.log(err)
    });
  }


  return (
    <div className = "root">
      {/*<CurrentUserContext.Provider value = { currentUser }>*/}
      <CurrentUserContext.Provider >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="movies" 
            element={<ProtectedRoute 
              loggedIn = {loggedIn}
              component={Movies}
              cardsArray = {useFilteredCard ? cardsArrayFiltered : cardsArray}
              savedCardsArray = {savedCardsArray}
              pullSerchData = {findCards}
              saveFilm = {saveFilm}
              // cardsCount = {cardsCount}
              preload = {preload}
              pageCardsCount = {pageCardsCount}
              pageCardsPreload = {pageCardsPreload}

              />} />
          <Route path="saved-movies" element={<ProtectedRoute 
              loggedIn = {loggedIn}
              component={SavedMovies} 
              cardsArray = {savedCardsArray} 
              preload = {preload}
              pageCardsCount = {pageCardsCount}
              pageCardsPreload = {pageCardsPreload}
            />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<Register 
            auth={handleRegistration}
            />} />
          <Route path="signin" element={<Login 
            auth={handleAuthorization}
            />} />
          <Route path="404" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  )

}
