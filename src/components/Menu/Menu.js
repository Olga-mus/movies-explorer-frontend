import './Menu.css'
import AccountButton from '../AccountButton/AccountButton'

import '../App/App.css'
import { Link } from 'react-router-dom'
import close from '../../images/menu/close.svg'

function Menu({ setOpenMenu }) {
  return (
    <section className="menu">
      <div className="menu__container">
        <div className="menu__shadow"></div>
        <nav className="menu__lead">
          <ul className="menu-nav">
            <li className="menu__element">
              <Link className="menu__title link" to="/">
                Главная
              </Link>
            </li>
            <li className="menu__element">
              <Link className="menu__subtitle link" to="/movies">
                Фильмы
              </Link>
            </li>
            <li className="menu__element">
              <Link className="menu__save-films link" to="/saved-movies">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <div className="menu__button">
            <AccountButton />
          </div>
          <button
            className="menu__btn-close link"
            onClick={() => setOpenMenu(false)}
          >
            <img
              src={close}
              className="menu__button-close"
              alt="кнопка закрытия"
            ></img>
          </button>
        </nav>
      </div>
    </section>
  )
}

export default Menu
