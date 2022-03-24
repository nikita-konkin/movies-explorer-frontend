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

  // const [currentUser, setCurrentUser] = useState({})

  const [cardsArray, setCardsArray] = useState([])
  const [savedCardsArray, setSavedCardsArray] = useState([])
  const [cardsArrayFiltered, setCardsArrayFiltered] = useState([])
  const [savedCardsArrayFiltered, setSavedCardsArrayFiltered] = useState([])
  
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
  const [preloadStatus, SetPreloadStatus] = useState(false)
  // const [isPreload, SetIsPreload] = useState(false)
  const [windoWidth, setWindoWidth] = useState(window.innerWidth)

  const [movieGetError, setMovieGetError] = useState(false)
  const [registrationError, setRegistrationError] = useState(false)
  // const [registrationErrorText, setRegistrationErrorText] = useState(false)


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

  function resetPreloadCounter() {
    SetPageCardsPreload(0)
  }

  function preload(set) {

    if (set & windoWidth > 768) {
      SetPageCardsPreload(pageCardsPreload + 4)
    } else if(set & windoWidth <= 768) {
      SetPageCardsPreload(pageCardsPreload + 2)
    }
  }

  function refreshPreloadStatus(saved) {
    // console.log(pageCardsPreload)
    // console.log(pageCardsCount)
    // console.log(saved)
    // console.log(pageCardsPreload + pageCardsCount)
    if (saved ? pageCardsPreload + pageCardsCount  >= savedCardsArray.length : pageCardsPreload + pageCardsCount >= cardsArray.length) {
      // console.log(pageCardsPreload + pageCardsCount)
      SetPreloadStatus(true)
    } else {
      SetPreloadStatus(false)
    }
  }

  function refreshCardsData(){
    moviesApi.getInitialCards().then(data => {
      setCardsArray(data)
    }).catch(err => {
      console.log(err)
      setMovieGetError(true)
    })
  }

  function refreshSavedCardsData(){
    mainApi.getSavedFilms().then(data => {
      setSavedCardsArray(data.data)
    }).catch(err => {
      console.log(err)
      setMovieGetError(true)
    })
  }

  function handleRegistration(data) {

    mainApi.handleRegistration(data.name, data.password, data.mail)
      .then(data => {
        setRegistrationStatus(true)
        navigate('/signin')
      }).catch(res => {
        setRegistrationError(true)
        console.log(res)
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

    refreshProfileData()
    refreshCardsData()
    refreshSavedCardsData()
  }

  function logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('loggedIn')
    navigate('/')
    // handleLogin()
  }

  function refreshProfileData(){
    mainApi.getProfileData().then(data => {
      setCurrentUser(data.data)
    }).catch(err => {
      console.log(err)
    });
  }

  function updateUserProfile(name, email){
    mainApi.patchUserInfo(name, email).then(data => {
      refreshProfileData()
    }).catch(err => {
      console.log(err)
    })
  }

  function findCards(request, short) {
    console.log(request);

    if (request != "" || short){
      setUseFilteredCard(true)
      const dataFiltered = cardsArray
        .filter(value => value.nameRU.toLowerCase().includes(request.toLowerCase()));
      const dataFilteredShort = dataFiltered
        .filter(value => value.duration <= 40);
      short ? setCardsArrayFiltered(dataFilteredShort) : setCardsArrayFiltered(dataFiltered)
    } else {
      setUseFilteredCard(false)
    }
  }

  function findCardsSavedFilms(request, short) {
    console.log(request);

    if (request != "" || short){
      setUseFilteredCard(true)
      const dataFiltered = savedCardsArray
        .filter(value => value.nameRU.toLowerCase().includes(request.toLowerCase()));
      const dataFilteredShort = dataFiltered
        .filter(value => value.duration <= 40);
      short ? setSavedCardsArrayFiltered(dataFilteredShort) : setSavedCardsArrayFiltered(dataFiltered)
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

  function deleteFilm(movieId) {
    mainApi.deleteFilm(movieId).then(res => {
      refreshSavedCardsData()
    }).catch(err => {
      console.log(err)
    });
  }

  function mergeSavedAndOrigMovies(cardsArray, savedMoviesArray, saved) {
    const savedId = savedMoviesArray.map(item => { return item.movieId; });
  
    let savedCardsArray = savedMoviesArray.map(obj => {
      return {
        country: obj.country,
        description: obj.description,
        director: obj.director,
        duration: obj.duration,
        image: obj.image,
        id: obj.movieId,
        nameEN: obj.nameEN,
        nameRU: obj.nameRU,
        owner: obj.owner,
        thumbnail: obj.thumbnail,
        trailerLink: obj.trailerLink,
        year: obj.year,
        __v: obj.__v,
        _id: obj._id,
        saved: true
      }
    })
  
    const cardsArrayFiltered = cardsArray.filter(card => !savedId.includes(card.id))
    const cardsArrayWithSaved = cardsArrayFiltered.concat(savedCardsArray).sort((a, b) => (a.id > b.id) ? 1 : -1)
    
    return saved ? savedCardsArray : cardsArrayWithSaved
  }

  // console.log(cardsArray)
  // console.log(savedCardsArray)
  function addOwner(movieId){
    mainApi.addOwner(movieId).then(res => {
      refreshSavedCardsData()
    }).catch(err => {
      console.log(err)
    });
  }


  return (
    <div className = "root">
      {/*<CurrentUserContext.Provider value = { currentUser }>*/}
      <CurrentUserContext.Provider value = {currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="movies" 
            element={<ProtectedRoute 
              loggedIn = {loggedIn}
              component={Movies}
              cardsArray = {useFilteredCard ? cardsArrayFiltered : cardsArray}
              savedCardsArray = {savedCardsArray}
              mergeMovies = {mergeSavedAndOrigMovies}
              pullSerchData = {findCards}
              saveFilm = {saveFilm}
              deleteFilm = {deleteFilm}
              // cardsCount = {cardsCount}
              preload = {preload}
              pageCardsCount = {pageCardsCount}
              pageCardsPreload = {pageCardsPreload}
              preloadStatus = {preloadStatus}
              refreshPreloadStatus = {refreshPreloadStatus}
              resetPreloadCounter = {resetPreloadCounter}
              movieGetError = {movieGetError}

              />} />
          <Route path="saved-movies" element = {<ProtectedRoute 
              loggedIn = {loggedIn}
              component={SavedMovies} 
              // cardsArray = {savedCardsArray}
              savedCardsArray = {useFilteredCard ? savedCardsArrayFiltered : savedCardsArray}
              mergeMovies = {mergeSavedAndOrigMovies}
              deleteFilm = {deleteFilm}
              pullSerchData = {findCardsSavedFilms}
              preload = {preload}
              pageCardsCount = {pageCardsCount}
              pageCardsPreload = {pageCardsPreload}
              preloadStatus = {preloadStatus}
              refreshPreloadStatus = {refreshPreloadStatus}
              resetPreloadCounter = {resetPreloadCounter}
              movieGetError = {movieGetError}
            />} />
          <Route path="profile" element = {<Profile
            updateUserProfile = {updateUserProfile}
            logOut = {logOut}
            />} />
          <Route path="signup" element={<Register 
            auth={handleRegistration}
            registrationError={registrationError}
            />} />
          <Route path="signin" element={<Login 
            auth={handleAuthorization}
            registrationStatus={registrationStatus}
            />} />
          <Route path="404" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  )

}
