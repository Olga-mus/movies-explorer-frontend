import "./Profile.css";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__data">
          <div className="profile__contentainer">
            <p className="profile__name">Имя</p>
            <p className="profile__name-profile">Виталий</p>
          </div>
          <div className="profile__contentainer">
            <p className="profile__email">E-mail</p>
            <p className="profile__email-profile">pochta@yandex.ru</p>
          </div>
        </div>
        <div className="profile__menu">
          <p className="profile__edit">Редактировать</p>
          <Link className="profile__redirect link" to="/signup">
            <p className="profile__link">Выйти из аккаунта</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Profile;
