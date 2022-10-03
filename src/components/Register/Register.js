import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../images/header/header-logo.svg';
import Preloader from "../Preloader/Preloader";


function Register(props) {
  const { onRegister } = props;


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password && name) {
      const newUser = {
        name, email, password
      }
      onRegister(newUser);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    }

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  }

  return (
    <section className="register">
      <div className="register__content">
        <div className="register__container">
         <Link className='register__link link' target="_blank" to="/">
          <img src={logo} className='register__logo' alt='лого'></img>
        </Link>
          <h1 className='register__title'>Добро пожаловать!</h1>
          <form
            name="register-form"
            noValidate
            onSubmit={handleSubmit}
            className="register__form"
          >
            <fieldset className="register__edit">
              <label className="register__field">
                Имя
                <input
                  onChange={handleChange}
                  value={name}
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
                  onChange={handleChange}
                  value={email}
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
                  onChange={handleChange}
                  value={password}
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
            <Link to="/signin" target="_blank">
              <button type="submit" className="register__button link">
                Зарегистрироваться
              </button>
            </Link>
            <div className="register__entry">
              <p className="register__reg">Уже зарегистрированы?</p>
              <Link
                className="register__link-entry link link"
                target="_blank"
                to="/signin"
              >
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
