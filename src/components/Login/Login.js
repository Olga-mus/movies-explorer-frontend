import './Login.css'
import { Link } from 'react-router-dom'
import { React } from 'react'
import logo from '../../images/header/header-logo.svg'
import { loginValidationConfig } from '../../constants/constants'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import Dialog from '../Dialog/Dialog'

function Login({ onLogin, isWaitingResponse, authError }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation(
    { email: '', password: '' },
    loginValidationConfig
  )

  function handleSubmit(e) {
    e.preventDefault()
    onLogin(values)
  }

  return (
    <section className="login">
      <div className="login__content">
        <div className="login__container">
          <Link className="login__link link" to="/">
            <img src={logo} className="login__logo" alt="лого"></img>
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
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
                  value={values.email}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="login__input login__input_type_email"
                  required
                />
                <span className="email-error login__error-message">
                  {errors.email}
                </span>
              </label>
              <label className="login__field">
                Пароль
                <input
                  onChange={handleChange}
                  value={values.password}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  className="login__input login__input_type_password"
                  required
                />
                <span className="password-error login__error-message">
                  {errors.password}
                </span>
              </label>
            </fieldset>
            <button
              type="submit"
              className="login__button link"
              disabled={!isValid || isWaitingResponse}
            >
              Войти
            </button>
            <div className="login__entry">
              <p className="login__reg">Ещё не зарегистрированы?</p>
              <Link className="login__link-entry link link" to="/signup">
                Регистрация
              </Link>
            </div>
          </form>
          <Dialog error={authError} />
        </div>
      </div>
    </section>
  )
}

export default Login
