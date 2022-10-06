import './HeaderNavLog.css'
import '../App/App.css'
import { Link } from 'react-router-dom'
function HeaderNavLog() {
  return (
    <div className="header__nav-log">
      <Link className="header__nav-link link" to="/movies">
        Фильмы
      </Link>
      <Link className="header__nav-link link" to="/saved-movies">
        Сохраненные фильмы
      </Link>
    </div>
  )
}

export default HeaderNavLog
