import React from "react";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


function App() {
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header />
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

          <Route path="/movies">
            <Movies />
          </Route>

          <Route path="/saved-movies">
            <Movies />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          {/* <Route>
            <Redirect to={`${loggedIn ? "/" : "/signin"}`} />
          </Route> */}

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
