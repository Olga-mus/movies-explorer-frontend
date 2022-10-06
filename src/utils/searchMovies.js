import { SHORT_MOVIE_MIN } from '../constants/constants'

export function searchMovies(movies, filter) {
  if (movies.length) {
    return movies.filter((movie) => {
      const { query, isShort } = filter

      const isShortMovie = movie.duration <= SHORT_MOVIE_MIN
      const isMatchName = movie.nameRU
        .toLowerCase()
        .includes(query?.toLowerCase())

      return isShort ? isMatchName && isShortMovie : isMatchName
    })
  }
}
