// import './MovieCardActive.css'
import card from '../../images/movie/movie-card.jpg'
import active from '../../images/movie/confirm-button.svg'

function MovieCardActive() {
  return (
    // <div className='element-active'>
    // <div className='element-active__container-card'>
    <div className="element-active">
      <figure className="element-active__card">
        <img
          src={card}
          alt="Название фильма"
          className="element-active__image"
        />
        <figcaption>
          <h2 className="element-active__title">33 слова о дизайне</h2>
        </figcaption>
      </figure>
      <button type="button" className="element-active__button-save link">
        <img src={active} alt="подтвердить" />
      </button>
      <p className="element-active__length">1ч 17 мин</p>
    </div>
    //   </div>
    // </div>
  )
}

export default MovieCardActive
