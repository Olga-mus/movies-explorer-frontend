import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MovieCardActive from "../MovieCardActive/MovieCardActive";
import MovieCardDelete from "../MovieCardDelete/MovieCardDelete";
import AddBlock from "../AddBlock/AddBlock";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function MoviesCardList() {
  return (
    <>
      <Header />
      <SearchForm />
      <FilterCheckbox />
      <section className="elements">
        <div className="elements__movies">
          <MoviesCard />
          <MovieCardActive />
          <MovieCardDelete />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
        <AddBlock />
        {/* <div className="elements__more">
      <button className="elements__more-button">Ещё</button>
    </div> */}
      </section>
      <Footer />
    </>
  );
}

export default MoviesCardList;
