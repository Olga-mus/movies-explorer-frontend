import "./HeaderNavLog.css";
import "../App/App.css";
import { Link } from "react-router-dom";
function HeaderNavLog() {
  return (
    <nav className="header__nav-log">
      <Link className="header__nav-link link" to="/films">
        Фильмы
      </Link>
      <Link className="header__nav-link link" to="/saveFilms">
        Сохраненные фильмы
      </Link>
    </nav>
  );
}

export default HeaderNavLog;
