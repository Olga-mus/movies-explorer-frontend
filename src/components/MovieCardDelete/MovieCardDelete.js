// import './MovieCardDelete.css'
import card from '../../images/movie/movie-card.jpg'
import del from '../../images/movie/delete.svg'

function MovieCardDelete() {
  return (
    // <div className='element-delete-active'>
    // <div className='element-delete-active__container-card'>
    <div className="element-delete-active">
      <figure className="element-delete-active__card">
        <img
          src={card}
          alt="Название фильма"
          className="element-delete-active__image"
        />
        <figcaption>
          <h2 className="element-delete-active__title">33 слова о дизайне</h2>
        </figcaption>
      </figure>
      <button type="button" className="element-delete-active__button-save link">
        <img src={del} alt="подтвердить" />
      </button>
      <p className="element-delete-active__length">1ч 17 мин</p>
    </div>
    //   </div>
    // </div>
  )
}

export default MovieCardDelete
