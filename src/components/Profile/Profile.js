import './Profile.css'
import { Link } from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import Dialog from '../Dialog/Dialog'
import Header from '../Header/Header'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import React, { useState, useEffect, useContext } from 'react'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { registrationValidationConfig as userValidationConfig } from '../../constants/constants'

function Profile({
  onEditProfile,
  onSignOut,
  statusUpdateProfile,
  isWaitingResponse,
}) {
  const currentUser = useContext(CurrentUserContext) //для хранения данных о пользователе
  const { values, handleChange, errors, isValid } = useFormWithValidation(
    currentUser,
    userValidationConfig
  )

  const isSameName = currentUser.name === values.name
  const isSameEmail = currentUser.email === values.email

  return (
    <>
      <Header />
      <section className="profile">
        <Dialog error={statusUpdateProfile} />
        <div className="profile__content">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <div className="profile__data">
            <form className="profile__contentainer">
              <label className="profile__label">
                <p className="profile__name">Имя</p>
                <input
                  className="profile__name-profile"
                  name="name"
                  value={values.name}
                  onInput={handleChange}
                />
              </label>
              <label className="profile__label">
                <p className="profile__email">E-mail</p>
                <input
                  className="profile__email-profile"
                  name="email"
                  type="email"
                  value={values.email}
                  onInput={handleChange}
                />
              </label>
            </form>
          </div>

          <div className="profile__menu">
            <span className="profile__error-message">
              {errors.email || errors.name}
            </span>
            <button
              type="button"
              onClick={() => onEditProfile(values)}
              className="profile__edit link"
              disabled={
                isWaitingResponse || !isValid || (isSameName && isSameEmail)
              }
            >
              Редактировать
            </button>
            <p className="profile__link" onClick={onSignOut}>
              Выйти из аккаунта
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
