import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import { searchMovies } from '../../utils/searchMovies'
import { getLocal, setLocal } from '../../utils/localStorage'
import { COUNT_CARDS, COUNT_CARDS_ADD } from '../../constants/constants'

function Movies({
  movies,
  loadAllMovies,
  isLoadingMovies,
  loadingMoviesError,
}) {
  const [foundMovies, setFoundMovies] = useState([])
  const [query, setQuery] = useState('')
  const [isShort, setShort] = useState(false)
  const [countCards, setCountCards] = useState(0)
  const [countCardsAdd, setCountCardsAdd] = useState(0)

  useEffect(() => {
    changeCountCards()
    window.addEventListener('resize', changeCountCards)
    return () => window.removeEventListener('resize', changeCountCards)
  }, [])

  useEffect(() => {
    if (movies.length) {
      setFoundMovies(searchMovies(movies, { query, isShort }))
    }
  }, [movies])

  useEffect(() => {
    const queryLocal = getLocal('searchQueryMovies')
    const isShortLocal = getLocal('isShortMovies')

    if (queryLocal) {
      setQuery(queryLocal)
      loadAllMovies()
    }

    if (isShortLocal) setShort(isShortLocal)
  }, [])

  useEffect(() => {
    if (query) handleFoundMovies()
  }, [isShort])

  function handleFoundMovies() {
    if (!movies.length) {
      loadAllMovies()
    } else {
      setFoundMovies(searchMovies(movies, { query, isShort }))
    }
    setLocal('searchQueryMovies', query)
    setLocal('isShortMovies', isShort)
  }

  function changeCountCards() {
    const widthWindow = document.documentElement.clientWidth

    if (widthWindow >= 1280) {
      setCountCards(COUNT_CARDS.MAX)
      setCountCardsAdd(COUNT_CARDS_ADD.MAX)
      return
    }

    if (768 <= widthWindow && widthWindow < 1280) {
      setCountCards(COUNT_CARDS.MEDIUM)
      setCountCardsAdd(COUNT_CARDS_ADD.MEDIUM)
      return
    }

    if (320 <= widthWindow && widthWindow < 768) {
      setCountCards(COUNT_CARDS.MIN)
      setCountCardsAdd(COUNT_CARDS_ADD.MIN)
      return
    }
  }

  function showMoreMovies() {
    setCountCards(countCards + countCardsAdd)
  }

  return (
    <>
      <Header />
      <SearchForm
        searchMovies={handleFoundMovies}
        query={query}
        setQuery={setQuery}
        isShort={isShort}
        setShort={setShort}
        required={true}
      />
      {!!movies.length && !foundMovies.length && (
        <p className="not-found-movies">Ничего не найдено</p>
      )}
      {isLoadingMovies ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={foundMovies.slice(0, countCards)}
          showMoreMovies={showMoreMovies}
          isShowButton={countCards < foundMovies.length}
          loadingMoviesError={loadingMoviesError}
        />
      )}
      <Footer />
    </>
  )
}

export default Movies
