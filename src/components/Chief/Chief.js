import './Chief.css'
import web from '../../images/chief/header-emblem.png'
function Chief() {
  return (
    <section className="chief">
      <div className="chief__information">
        <div className="chief__text">
          <h1 className="chief__title">
            Учебный проект студента факультета <nobr>Веб-разработки</nobr>
          </h1>
          <p className="chief__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a className="chief__link link" href="#abouts">
            <button type="button" className="chief__button">
              Узнать больше
            </button>
          </a>
        </div>
        <img className="chief__image" src={web} alt="логотип веб" />
      </div>
    </section>
  )
}

export default Chief
