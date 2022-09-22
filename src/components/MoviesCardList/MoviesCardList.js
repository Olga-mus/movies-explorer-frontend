import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MovieCardActive from "../MovieCardActive/MovieCardActive";
import MovieCardDelete from "../MovieCardDelete/MovieCardDelete";
import AddBlock from "../AddBlock/AddBlock";
function MoviesCardList() {
  return (
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
  );
}

export default MoviesCardList;
