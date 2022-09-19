import React from "react";
import { Route, Switch } from "react-router-dom"; // импортируем Switch
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

function App() {
  return (
    <div className="App">
      <Header />
      {/* Пропс exact гарантирует, что значение пропса path будет сравниваться с путём в URL по принципу полного равенства  */}
      <main>
        <Switch>
          {/* Если разместить несколько компонентов Route внутри Switch, отрисуется только один из них. */}
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