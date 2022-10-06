import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import AddBlock from '../AddBlock/AddBlock'

function MoviesCardList({
  movies,
  showMoreMovies,
  isShowButton,
  loadingMoviesError,
}) {
  if (loadingMoviesError)
    return <p className="elements__error">{loadingMoviesError}</p>

  return (
    <section className="elements">
      <div className="elements__movies">
        {movies.map((movie) => (
          <MoviesCard key={movie.id || movie._id} movie={movie} />
        ))}
      </div>
      {isShowButton && <AddBlock showMoreMovies={showMoreMovies} />}
    </section>
  )
}

export default MoviesCardList
