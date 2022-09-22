import "./HeaderNavLog.css";
import "../App/App.css";
import { Link } from "react-router-dom";
function HeaderNavLog() {
  return (
    <nav className="header__nav-log">
      <Link className="header__nav-link link" target="_blank" to="/movies">
        Фильмы
      </Link>
      <Link className="header__nav-link link" target="_blank" to="/saved-movies">
        Сохраненные фильмы
      </Link>
    </nav>
  );
}

export default HeaderNavLog;
