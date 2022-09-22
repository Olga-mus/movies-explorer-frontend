import "./MoviesCard.css";
import card from "../../images/movie/movie-card.jpg";

function MoviesCard() {
  return (
    // <div className='element'>
    // <div className='element__container-card'>
    <div class="element">
      <figure class="element__card">
        <img src={card} alt="Название фильма" class="element__image" />
        <figcaption>
          <h2 class="element__title">33 слова о дизайне</h2>
        </figcaption>
      </figure>
      <button type="button" class="element__button-save link">
        Сохранить
      </button>
      <p class="element__length">1ч 17 мин</p>
    </div>
    //   </div>
    // </div>
  );
}

export default MoviesCard;
