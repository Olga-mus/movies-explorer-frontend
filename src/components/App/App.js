import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import "../Main/Main.css";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";
import { mainApi } from "../../utils/MainApi";
import { MoviesApi } from "../../utils/MoviesApi";
import { AuthContext } from "../../contexts/AuthContext";
import PopupEditProfile from "../PopupEditProfile/PopupEditProfile";


function App() {
  const [currentUser, setCurrentUser] = useState({}); //для хранения данных о пользователе
  const [loggedIn, setLoggedIn] = useState(false); //Внутри App.js подготовим стейт-переменную loggedIn. Она будет содержать статус пользователя — вошёл он в систему или нет
  const token = localStorage.getItem("jwt");
  const [preloader, setPreloader] = useState(false);
  const history = useHistory();
  const [isTooltipPopupOpen, setTooltipPopupOpen] = useState(false);
  const [isRequestCompleted, setRequestCompleted] = useState(false);
  const [userEmail, setUserEmail] = useState("ya@kick.ru");
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);




  //закрытие попапов
  const closeAllPopups = () => {
    setTooltipPopupOpen(false);
    setIsEditProfilePopupOpen(false);

  };

  function handleSignOutClick() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/signin");
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      mainApi
        .checkToken(token)
        .then((data) => {
          setLoggedIn(true);
          setUserEmail(data.email);
          history.push("/movies");
        })
        .catch((err) => console.log(err));
    }
  }, [history]);

  // useEffect(() => {
  //   if (loggedIn) {
  //     // вызываем получение данных ...
  //     Promise.all([mainApi.getProfile(token), mainApi.getSaveMovies(token)])
  //       .then((resData) => {
  //         const [userData, cardList] = resData;
  //         setCurrentUser(userData.data);
  //         setCards(cardList.reverse());
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [loggedIn, token]);

  function handleRegisterSubmit(newUser) {
    setPreloader(true);
    mainApi
      .register(newUser)
      .then((res) => {
        if (res) {
          console.log("register");
          setLoggedIn(true);
          setRequestCompleted(true);
          setTooltipPopupOpen(true);

          setTimeout(() => {
            history.push("/signin");
            setTooltipPopupOpen(false);
          }, 1500);
        }
      })
      .catch(() => {
        setRequestCompleted(false);
        setTooltipPopupOpen(true);
      })
  }

  function handleLoginSubmit(email, password) {
    setPreloader(true)
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          console.log("authorize");
          setLoggedIn(true);
          setUserEmail(email);
          history.push("/movies");
          localStorage.setItem("jwt", res.token);
        }
      })
      .catch(() => {
        setRequestCompleted(false);
        setTooltipPopupOpen(true);
      });
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true); //переменные состояния, отвечающие за видимость
  };

  const handleUpdateUser = (data) => {
    mainApi
      .editProfile(data, token)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AuthContext.Provider
        value={{ loggedIn: loggedIn, userEmail: userEmail }}
      >
        <div className="App">
          {/* <Header onSignOut={handleSignOutClick} loggedIn={loggedIn} /> */}
          {/* Пропс exact гарантирует, что значение пропса path будет сравниваться с путём в URL по принципу полного равенства  */}
          <main>
            <Switch>
              {/* Если разместить несколько компонентов Route внутри Switch, отрисуется только один из них. */}

              {/* <ProtectedRoute
              exact
              path="/"
              loggedIn={loggedIn}
              component={Main}
            /> */}

              <Route exact path="/">
                <Main />
              </Route>

              {/* <Route path="/movies">
            <Movies />
          </Route> */}

              <ProtectedRoute
                path="/movies"
                loggedIn={loggedIn}
                cards={cards}
                component={Movies}
              />

              {/* <Route path="/saved-movies">
            <SavedMovies />
          </Route> */}

              <ProtectedRoute
                path="/saved-movies"
                loggedIn={loggedIn}
                cards={cards}
                component={SavedMovies}
              />

              {/* <Route 
              path="/profile"
              onEditProfile={handleEditProfileClick}
>
            <Profile />
          </Route> */}

              <ProtectedRoute
                path="/profile"
                loggedIn={loggedIn}
                component={Profile}
                onEditProfile={handleEditProfileClick}
              />

              <Route path="/signup">
                <Register onRegister={handleRegisterSubmit} />
              </Route>

              <Route path="/signin">
                <Login onLogin={handleLoginSubmit} />
              </Route>

              <Route>
                <Redirect to={`${loggedIn ? "/" : "/signin"}`} />
              </Route>

              <Route path="*">
                <PageNotFound />
              </Route>

              <InfoTooltip
                isOpen={isTooltipPopupOpen}
                onClose={closeAllPopups}
                isRequestCompleted={isRequestCompleted}
              />

          <PopupEditProfile
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
            </Switch>
          </main>

          {/* <Footer /> */}
        </div>
      </AuthContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
