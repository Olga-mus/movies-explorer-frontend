import './MoviesCard.css'
import active from '../../images/movie/confirm-button.svg'
import del from '../../images/movie/delete.svg'
import { durationFormat } from '../../utils/durationFormat'
import { mainApi } from '../../utils/MainApi'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContext'
import { getLocal, setLocal } from '../../utils/localStorage'

function MoviesCard({ movie }) {
  const [savedMovieId, setSavedMovieId] = useState(movie?._id)
  const location = useLocation()
  const { savedMoviesContext } = useContext(AppContext)

  const isSavedMoviesPage = location.pathname === '/saved-movies'

  const moviesPageButton = !!savedMovieId ? (
    <button
      type="button"
      className="element-active__button-save link"
      onClick={handleClickLikeButton}
    >
      <img src={active} alt="подтвердить" />
    </button>
  ) : (
    <button
      type="button"
      className="element__button-save link"
      onClick={handleClickLikeButton}
    >
      Сохранить
    </button>
  )

  function handleSaveMovie() {
    const token = getLocal('jwt')

    const newMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co' + movie.image.url,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail:
        'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
      movieId: movie.id,
    }

    mainApi.postMovies(newMovie, token).then((saveMovie) => {
      setSavedMovieId(saveMovie._id)
    })
  }

  function handleDeleteMovie() {
    const token = getLocal('jwt')

    mainApi.deleteMovie(savedMovieId, token).then(() => {
      const { setSavedMovies, savedMovies } = savedMoviesContext
      setSavedMovieId('')

      if (isSavedMoviesPage) {
        setSavedMovies(
          savedMovies.filter((movie) => movie._id !== savedMovieId)
        )
      }
    })
  }

  function handleClickLikeButton() {
    !!savedMovieId ? handleDeleteMovie() : handleSaveMovie()
  }

  return (
    <div className="element" href={movie.trailerLink} target="_blank">
      <a className="element__link" href={movie.trailerLink} target="_blank">
        <figure className="element__card">
          <img
            src={
              isSavedMoviesPage
                ? movie.image
                : 'https://api.nomoreparties.co/' + movie.image.url
            }
            alt="Название фильма"
            className="element__image"
          />
          <figcaption>
            <h2 className="element__title">{movie.nameRU}</h2>
          </figcaption>
        </figure>
      </a>
      {isSavedMoviesPage ? (
        <button
          type="button"
          className="element-delete-active__button-save link"
          onClick={handleClickLikeButton}
        >
          <img src={del} alt="подтвердить" />
        </button>
      ) : (
        moviesPageButton
      )}
      <p className="element__length">{durationFormat(movie.duration)}</p>
    </div>
  )
}

export default MoviesCard
