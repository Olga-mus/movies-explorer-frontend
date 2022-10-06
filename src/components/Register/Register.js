import './Register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../images/header/header-logo.svg'
import Preloader from '../Preloader/Preloader'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { registrationValidationConfig } from '../../constants/constants'
import Dialog from '../Dialog/Dialog'

function Register({ onRegister, isWaitingResponse, authError }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation(
    { name: '', email: '', password: '' },
    registrationValidationConfig
  )

  function handleSubmit(e) {
    e.preventDefault()
    onRegister(values)
  }

  return (
    <section className="register">
      <div className="register__content">
        <div className="register__container">
          <Link className="register__link link" to="/">
            <img src={logo} className="register__logo" alt="лого"></img>
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
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
                  value={values.name}
                  id="register"
                  type="text"
                  name="name"
                  placeholder="Имя"
                  className="register__input register__input_type_register"
                  required
                  minLength="2"
                  maxLength="30"
                />
                <span className="register-error register__error-message">
                  {errors.name}
                </span>
              </label>

              <label className="register__field">
                E-mail
                <input
                  onChange={handleChange}
                  value={values.email}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="register__input register__input_type_email"
                  required
                />
                <span className="email-error register__error-message">
                  {errors.email}
                </span>
              </label>

              <label className="register__field">
                Пароль
                <input
                  onChange={handleChange}
                  value={values.password}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  className="register__input register__input_type_password"
                  required
                />
                <span className="password-error register__error-message">
                  {errors.password}
                </span>
              </label>
            </fieldset>
            <button
              type="submit"
              className="register__button link"
              disabled={!isValid || isWaitingResponse}
            >
              Зарегистрироваться
            </button>
            <div className="register__entry">
              <p className="register__reg">Уже зарегистрированы?</p>
              <Link className="register__link-entry link link" to="/signin">
                Войти
              </Link>
            </div>
          </form>
          <Dialog error={authError} />
        </div>
      </div>
    </section>
  )
}

export default Register
