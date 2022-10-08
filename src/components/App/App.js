import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import '../Main/Main.css'
import './App.css'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'
import SavedMovies from '../SavedMovies/SavedMovies'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Preloader from '../Preloader/Preloader'
import { mainApi } from '../../utils/MainApi'
import { moviesApi } from '../../utils/MoviesApi'
import { AppContext } from '../../contexts/AppContext'
import { getToken } from '../../utils/getToken'

function App() {
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState({}) //для хранения данных о пользователе
  const [loggedIn, setLoggedIn] = useState(false) //Внутри App.js подготовим стейт-переменную loggedIn. Она будет содержать статус пользователя — вошёл он в систему или нет
  const [loading, setLoading] = useState(true)
  const [allMovies, setAllMovies] = useState([])
  const [savedMovies, setSavedMovies] = useState([])
  const [isLoadingMovies, setLoadingMovies] = useState(false)
  const [loadingMoviesError, setLoadingMoviesError] = useState('')
  const [statusUpdateProfile, setStatusUpdateProfile] = useState('')
  const [isWaitingResponse, setWaitingResponse] = useState(false)
  const [authError, setAuthError] = useState('')

  // Вход по токену
  useEffect(() => {
    handleLoginToken()
  }, [])

  // Вход по токену
  function handleLoginToken() {
    const token = getToken()
    token ? handleCheckToken(token) : setLoading(false)
  }

  function showLoadingMoviesError() {
    setLoadingMoviesError(
      'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
    )
  }

  function showAuthError(message) {
    setAuthError(message)
    setTimeout(() => {
      setAuthError('')
    }, 2000)
  }

  function showStatusUpdateProfile(message) {
    setStatusUpdateProfile(message)
    setTimeout(() => {
      setStatusUpdateProfile('')
    }, 2000)
  }

  // Загрузить все фильмы
  function loadAllMovies() {
    const token = getToken()
    setLoadingMovies(true)
    setLoadingMoviesError('')

    Promise.all([moviesApi.getCards(), mainApi.getSaveMovies(token)])
      .then(([all, saved]) => {
        setAllMovies(
          all.map((movie) => {
            let formatMovie = null

            saved.forEach((savedMovie) => {
              if (savedMovie.movieId === movie.id) {
                formatMovie = { ...movie, _id: savedMovie._id }
              }
            })

            return formatMovie || movie
          })
        )
      })
      .catch((err) => {
        if (err.endsWith('401')) handleSignOutClick()
        showLoadingMoviesError()
      })
      .finally(() => {
        setLoadingMovies(false)
      })
  }

  // Загрузить сохраненные фильмы
  function loadSavedMovies() {
    const token = getToken()
    setLoadingMovies(true)
    setLoadingMoviesError('')
    mainApi
      .getSaveMovies(token)
      .then((movies) => {
        setSavedMovies(movies)
      })
      .catch((err) => {
        if (err.endsWith('401')) handleSignOutClick()
        showLoadingMoviesError()
      })
      .finally(() => {
        setLoadingMovies(false)
      })
  }

  // Выход
  function handleSignOutClick() {
    setCurrentUser({})
    setLoggedIn(false)
    setAllMovies([])
    setSavedMovies([])
    localStorage.removeItem('searchQueryMovies')
    localStorage.removeItem('isShortMovies')
    localStorage.removeItem('jwt')
  }

  // Регистрация
  function handleRegisterSubmit(user) {
    // setPreloader(true)
    setWaitingResponse(true)
    mainApi
      .register(user)
      .then(() => {
        handleLoginSubmit({ email: user.email, password: user.password })
      })
      .catch(() => {
        showAuthError('Произошла ошибка при регистрации')
        setWaitingResponse(false)
      })
  }

  // Вход
  function handleLoginSubmit(user) {
    // setPreloader(true)
    setWaitingResponse(true)
    mainApi
      .authorize(user)
      .then(({ token }) => {
        setLoggedIn(true)
        handleCheckToken(token)
        localStorage.setItem('jwt', token)
        history.push('/movies')
      })
      .catch(() => {
        showAuthError('Произошла ошибка при входе')
        setWaitingResponse(false)
      })
  }

  // Авторизация по токену
  function handleCheckToken(token) {
    mainApi
      .checkToken(token)
      .then((user) => {
        setLoggedIn(true)
        setCurrentUser(user)
      })
      .catch((err) => {
        if (err === 401) handleSignOutClick()
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function handleUpdateUser(data) {
    const token = getToken()
    setWaitingResponse(true)
    mainApi
      .editProfile(data, token)
      .then((res) => {
        setCurrentUser(res)
        showStatusUpdateProfile('Данные профиля успешно обновлены')
      })
      .catch((err) => {
        if (err.endsWith('401')) handleSignOutClick()
        showStatusUpdateProfile('Ошибка! Данные профиля не удалось обновить')
      })
      .finally(() => {
        setWaitingResponse(false)
      })
  }

  return (
    <AppContext.Provider
      value={{
        loggedIn: loggedIn,
        savedMoviesContext: {
          setSavedMovies,
          savedMovies,
        },
        allMoviesContext: {
          setAllMovies,
          allMovies,
        },
      }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="App">
          <main>
            {!loading && (
              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>

                <ProtectedRoute
                  path="/movies"
                  exact
                  loggedIn={loggedIn}
                  component={Movies}
                  movies={allMovies}
                  loadAllMovies={loadAllMovies}
                  isLoadingMovies={isLoadingMovies}
                  loadingMoviesError={loadingMoviesError}
                />

                <ProtectedRoute
                  path="/saved-movies"
                  exact
                  loggedIn={loggedIn}
                  component={SavedMovies}
                  movies={savedMovies}
                  loadSavedMovies={loadSavedMovies}
                  isLoadingMovies={isLoadingMovies}
                  loadingMoviesError={loadingMoviesError}
                />

                <ProtectedRoute
                  path="/profile"
                  exact
                  loggedIn={loggedIn}
                  component={Profile}
                  onEditProfile={handleUpdateUser}
                  onSignOut={handleSignOutClick}
                  statusUpdateProfile={statusUpdateProfile}
                  authError={isWaitingResponse}
                />

                <ProtectedRoute
                  path="/signup"
                  exact
                  loggedIn={!loggedIn}
                  component={Register}
                  onRegister={handleRegisterSubmit}
                  isWaitingResponse={isWaitingResponse}
                  authError={authError}
                  setWaitingResponse={setWaitingResponse}
                />

                <ProtectedRoute
                  path="/signin"
                  exact
                  loggedIn={!loggedIn}
                  component={Login}
                  onLogin={handleLoginSubmit}
                  isWaitingResponse={isWaitingResponse}
                  authError={authError}
                  setWaitingResponse={setWaitingResponse}
                />

                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            )}
          </main>
        </div>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  )
}

export default App
