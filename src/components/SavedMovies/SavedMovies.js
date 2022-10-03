import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function SavedMovies() {
  return (
    <>
      <MoviesCardList />
      <MoviesCard />
    </>
  );
}

export default SavedMovies;
