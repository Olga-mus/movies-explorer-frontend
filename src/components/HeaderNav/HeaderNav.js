import "./HeaderNav.css";
import "../App/App.css";
import { Link } from "react-router-dom";
function HeaderNav() {
  return (
    <nav className="header__nav">
      <Link className="header__link link" target="_blank" to="/signup">
        Регистрация
      </Link>
      <Link className="header__button link" target="_blank" to="/signin">
        <button type="button" className="header__button">Войти</button>
      </Link>
    </nav>
  );
}

export default HeaderNav;
