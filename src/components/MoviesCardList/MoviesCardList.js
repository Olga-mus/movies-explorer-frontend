import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import AddBlock from "../AddBlock/AddBlock";
function MoviesCardList() {
  return (
    <section className="elements">
      <div className="elements__movies">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
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
