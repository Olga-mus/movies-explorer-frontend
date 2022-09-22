import "./MovieCardActive.css";
import card from "../../images/movie/movie-card.jpg";
import active from "../../images/movie/confirm-button.svg";

function MovieCardActive() {
  return (
    // <div className='element-active'>
    // <div className='element-active__container-card'>
    <div class="element-active">
      <figure class="element-active__card">
        <img src={card} alt="Название фильма" class="element-active__image" />
        <figcaption>
          <h2 class="element-active__title">33 слова о дизайне</h2>
        </figcaption>
      </figure>
      <button type="button" class="element-active__button-save link">
        <img src={active} alt="подтвердить" />
      </button>
      <p class="element-active__length">1ч 17 мин</p>
    </div>
    //   </div>
    // </div>
  );
}

export default MovieCardActive;
