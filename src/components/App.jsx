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
import {
  WIND_SIZE,
  CARDS_PARAMS
} from '../utils/utils.js'
import Movies from './Movies.jsx'
import SavedMovies from './SavedMovies.jsx'
import Profile from './Profile.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import NotFound from './NotFound.jsx'
import Main from './Main.jsx'
import { useCookies } from "react-cookie";

const {W_768, W_320} = WIND_SIZE
const {W_1280_COUNT, W_768_COUNT, W_320_COUNT,
  W_768_PRELOAD_CARD_COUNT, W_320_PRELOAD_CARD_COUNT} = CARDS_PARAMS

export default function App() {

  const [cardsArray, setCardsArray] = useState([])
  const [savedCardsArray, setSavedCardsArray] = useState([])
  const [cardsArrayFiltered, setCardsArrayFiltered] = useState([])
  const [savedCardsArrayFiltered, setSavedCardsArrayFiltered] = useState([])
  
  const [useFilteredCard, setUseFilteredCard] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [registrationStatus, setRegistrationStatus] = useState(false)
  const [profileUpdateStatus, setProfileUpdateStatus] = useState(false)
  const token = localStorage.getItem("token");
  const loggedIn = localStorage.getItem("loggedIn");

  const [pageCardsCount, SetPageCardsCount] = useState()
  const [pageCardsPreload, SetPageCardsPreload] = useState(0)
  const [preloadStatus, SetPreloadStatus] = useState(false)
  const [windoWidth, setWindoWidth] = useState(window.innerWidth)

  const [movieGetError, setMovieGetError] = useState(false)
  const [registrationError, setRegistrationError] = useState(false)
  const [authorizationError, setAuthorizationError] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

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

    if (windoWidth > W_768) {
      SetPageCardsCount(W_1280_COUNT)
    } else if(windoWidth > W_320) {
      SetPageCardsCount(W_768_COUNT)
    } else if (windoWidth <= W_320) {
      SetPageCardsCount(W_320_COUNT)
    }
  }

  function resetPreloadCounter() {
    SetPageCardsPreload(0)
  }

  function preload(set) {

    if (set & windoWidth > W_768) {
      SetPageCardsPreload(pageCardsPreload + W_768_PRELOAD_CARD_COUNT)
    } else if(set & windoWidth <= W_768) {
      SetPageCardsPreload(pageCardsPreload + W_320_PRELOAD_CARD_COUNT)
    }
  }

  function refreshPreloadStatus(saved) {

    const arrayCard = useFilteredCard ? cardsArrayFiltered.length : cardsArray.length
    const arraySavedCard = useFilteredCard ? savedCardsArrayFiltered.length : savedCardsArray.length

    if (saved ? pageCardsPreload + pageCardsCount  >= arraySavedCard : 
      pageCardsPreload + pageCardsCount >= arrayCard) {
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

    mainApi.handleRegistration(data.name, data.password, data.email)
      .then(res => {
        setRegistrationStatus(true)
        handleAuthorization(data)
        navigate('/movies')
      }).catch(res => {
        setRegistrationError(true)
      })
  }
  
  function handleAuthorization(data) {
    mainApi.handleAuthorization(data.email, data.password)
      .then(auth => {
        localStorage.setItem('token', auth.token);
        handleLogin()
        navigate('/movies')
      })
      .catch(err => {
        setAuthorizationError(true)
        console.log(err)
      })
  }

  function handleLogin() {
    localStorage.setItem('loggedIn', true)
    refreshProfileData()
    refreshCardsData()
    refreshSavedCardsData()
  }

  function logOut(){
    removeCookie("jwt");
    localStorage.removeItem('token')
    localStorage.removeItem('loggedIn')
    navigate('/')
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
      setProfileUpdateStatus(true)
    }).catch(err => {
      console.log(err)
    })
  }

  function findCards(request, short) {
    const array = mergeSavedAndOrigMovies(cardsArray, savedCardsArray)

    if (request != "" || short){
      setUseFilteredCard(true)
      const dataFiltered = array
        .filter(value => value.nameRU.toLowerCase().includes(request.toLowerCase()));
      const dataFilteredShort = dataFiltered
        .filter(value => value.duration <= 40);
      short ? setCardsArrayFiltered(dataFilteredShort) : setCardsArrayFiltered(dataFiltered)
    } else {
      setUseFilteredCard(false)
    }
  }

  function findCardsSavedFilms(request, short) {
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

  function addOwner(movieId){
    mainApi.addOwner(movieId).then(res => {
      refreshSavedCardsData()
    }).catch(err => {
      console.log(err)
    });
  }

  // console.log(cardsArray)
  // console.log(cardsArrayFiltered)
  // console.log(savedCardsArray)
  // console.log(savedCardsArrayFiltered)

  return (
    <div className = "root">
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
            useFilteredCard = {useFilteredCard}

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
            profileUpdateStatus = {profileUpdateStatus}
            />} />
          <Route path="signup" element={<Register 
            auth={handleRegistration}
            registrationError={registrationError}
            />} />
          <Route path="signin" element={<Login 
            auth={handleAuthorization}
            registrationStatus={registrationStatus}
            authorizationError={authorizationError}
            />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  )

}
