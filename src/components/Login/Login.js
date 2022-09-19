import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="login__content">
        <div className="login__container">
          {/* <a href='#' className='login__link link'>
          <img src={logo} className='login__logo' alt='лого'></img>
        </a>
        <h1 className='login__title'>Рады видеть!</h1> */}
          <form className="login__form">
            <fieldset className="login__edit">
              <label className="login__field">
                E-mail
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="login__input login__input_type_email"
                  required
                />
                <span className="email-error login__error-message"></span>
              </label>
              <label className="login__field">
                Пароль
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  className="login__input login__input_type_password"
                  required
                />
                <span className="password-error login__error-message"></span>
              </label>
            </fieldset>
            <Link to="/signin">
              <button className="login__button link">Войти</button>
            </Link>
            <div className="login__entry">
              <p className="login__reg">Ещё не зарегистрированы?</p>
              <Link className="login__link-entry link link" to="/signup">
                Регистрация
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
