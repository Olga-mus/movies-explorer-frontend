import "./PopupEditProfile.css";
import "../App/App.css";
import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function PopupEditProfile(props) {

  const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const open = props.isOpen ? "popup_opened" : "";
  
    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    useEffect(() => {
      setName(currentUser.name || "");
      setEmail(currentUser.email || "");
    }, [currentUser]);
  
    function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
      e.preventDefault();
  
      // Передаём значения управляемых компонентов во внешний обработчик
      props.onUpdateUser({
        name,
        email,
      });
    }
  
    function handleChangeName(e) {
      setName(e.target.value);
    }
  
    function handleChangeEmail(e) {
      setEmail(e.target.value);
    }

  return (
    <div
      className={`popup-prof popup-prof_input-window ${open}`}
      id="popup-prof_edit-profile"
    >
      <div className="popup-prof__container">
        <button className="popup-prof__close-button"></button>
        <form
          onSubmit={handleSubmit}
          id="form__edit-profile"
          className="popup-prof__form"
          name="edit_profile"
          novalidate
        >
          <h3 className="popup-prof__title">Редактировать профиль</h3>
          <fieldset className="popup-prof__profile">
            <label className="popup-prof__field">
              <input
                id="firstname"
                value={name}
                onChange={handleChangeName}
                type="text"
                name="firstname"
                placeholder="Введите имя"
                className="popup-prof__input popup-prof__input_type_name"
                required
                minlength="2"
                maxlength="40"
              />
              <span className="firstname-error popup-prof__error-message"></span>
            </label>
            <label className="popup-prof__field">
              <input
                id="email"
                value={email}
                onChange={handleChangeEmail}
                type="text"
                name="email"
                placeholder="Введите email"
                className="popup-prof__input popup-prof__input_type_job"
                required
                minlength="2"
                maxlength="40"
              />
              <span className="email-error popup-prof__error-message"></span>
            </label>
          </fieldset>
          <button
            id="submit_edit-profile"
            type="submit"
            className="popup-prof__save-button link"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupEditProfile;
