import "./Profile.css";
import { Link } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useState, useEffect, useContext } from "react";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext); //для хранения данных о пользователе

  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__content">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <div className="profile__data">
            <div className="profile__contentainer">
              <p className="profile__name">Имя</p>
              <p className="profile__name-profile">{currentUser.name}</p>
            </div>
            <div className="profile__contentainer">
              <p className="profile__email">E-mail</p>
              <p className="profile__email-profile">{currentUser.email}</p>
            </div>
          </div>
          <div className="profile__menu">
            <button
              type="button"
              onClick={props.onEditProfile}
              className="profile__edit link"
            >
              Редактировать
            </button>
            <Link className="profile__redirect link" to="/signup">
              <p className="profile__link">Выйти из аккаунта</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
