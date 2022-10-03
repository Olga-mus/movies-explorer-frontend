import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;
