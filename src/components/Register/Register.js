import "./Register.css";
import logo from "../../images/header/header-logo.svg";
import { Link } from "react-router-dom";
// import Header from '../Header/Header';
function Register() {
  return (
    <section className="register">
      <div className="register__content">
        <div className="register__container">
          {/* <a href='#' className='register__link link'>
          <img src={logo} className='register__logo' alt='лого'></img>
        </a> */}
          {/* <h1 className='register__title'>Добро пожаловать!</h1> */}
          <form className="register__form">
            <fieldset className="register__edit">
              <label className="register__field">
                Имя
                <input
                  id="register"
                  type="text"
                  name="name"
                  placeholder="Имя"
                  className="register__input register__input_type_register"
                  required
                  minlength="2"
                  maxlength="30"
                />
                <span className="register-error register__error-message"></span>
              </label>

              <label className="register__field">
                E-mail
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="register__input register__input_type_email"
                  required
                />
                <span className="email-error register__error-message"></span>
              </label>

              <label className="register__field">
                Пароль
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  className="register__input register__input_type_password"
                  required
                />
                <span className="password-error register__error-message"></span>
              </label>
            </fieldset>
            <Link to="/signin">
              <button className="register__button link">
                Зарегистрироваться
              </button>
            </Link>
            <div className="register__entry">
              <p className="register__reg">Уже зарегистрированы?</p>
              <Link className="register__link-entry link link" to="/signin">
                Войти
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
