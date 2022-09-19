import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function Movies() {
  return (
    <>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
    </>
  );
}

export default Movies;
