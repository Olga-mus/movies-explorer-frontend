import "./Login.css";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import logo from '../../images/header/header-logo.svg';
import {emailRegex} from '../../constants/constants'
import {nameRegex} from '../../constants/constants'

import Preloader from "../Preloader/Preloader";

function Login(props) {
  const { onLogin } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      onLogin(email, password);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  }

  return (
    <section className="login">
      <div className="login__content">
        <div className="login__container">
        <Link className='login__link link' target="_blank" to="/">
          <img src={logo} className='login__logo' alt='лого'></img>
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
          <form
            name="login_form"
            noValidate
            onSubmit={handleSubmit}
            className="login__form"
          >
            <fieldset className="login__edit">
              <label className="login__field">
                E-mail
                <input
                  onChange={handleChange}
                  value={email}
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
                  onChange={handleChange}
                  value={password}
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
            <Link target="_blank" to="/signin">
              <button type="submit" className="login__button link">
                Войти
              </button>
            </Link>
            <div className="login__entry">
              <p className="login__reg">Ещё не зарегистрированы?</p>
              <Link
                className="login__link-entry link link"
                target="_blank"
                to="/signup"
              >
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
