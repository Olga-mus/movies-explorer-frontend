export class MainApi {
  constructor(config) {
    this.baseURL = config.baseURL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  //возвращает информацию о пользователе (email и имя)
  getProfile(token) {
    return fetch(`${this.baseURL}/users/me`, {
      credentials: "include",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        // authorization: `Bearer ${localStorage.getItem('jwt')}`
        // authorization: `Bearer ${localStorage.getItem('token')}`
      },
    }).then(this._checkResponse);
  }

  //обновляет информацию о пользователе (email и имя)
  editProfile({ email, name }, token) {
    return fetch(`${this.baseURL}/users/me`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        // authorization: `Bearer ${localStorage.getItem('jwt')}`,
        // authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
      }),
    }).then(this._checkResponse);
  }

  //возвращает все сохранённые текущим  пользователем фильмы
  getSaveMovies(token) {
    return fetch(`${this.baseURL}/movies`, {
      credentials: "include",
      headers: {
        authorization: `Bearer ${token}`,
        // authorization: `Bearer ${localStorage.getItem('jwt')}`
        // authorization: `Bearer ${localStorage.getItem('token')}`
      },
    }).then(this._checkResponse);
  }

  //создаёт фильм с переданными в теле
  // country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId

  postMovies(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
    token
  ) {
    return fetch(`${this.baseURL}/movies`, {
      credentials: "include",
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        // authorization: `Bearer ${localStorage.getItem('jwt')}`,
        // authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: country || "NoSelected",
        director: director || "NoSelected",
        duration: duration,
        year: year,
        description: description,
        image: 'https://api.nomoreparties.co/', //ссылка на постер к фильму 
        trailerLink: trailerLink, // ссылка на трейлер фильма.
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail:5 // миниатюрное изображение постера к фильму.
      }),
    }).then(this._checkResponse);
  }

  //удаляет сохранённый фильм по id

  deleteMovie(id, token) {
    return fetch(`${this.baseURL}/movies/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        authorization: `Bearer ${token}`,
        // authorization: `Bearer ${localStorage.getItem('jwt')}`,
        // authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  _handleError(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  register(newUser) {
    return fetch(`${this.baseURL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      }),
    }).then((res) => this._handleError(res));
  }

  authorize(email, password) {
    return fetch(`${this.baseURL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    })
      .then((res) => this._handleError(res))
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token); // токен сохранён в localStorage
          localStorage.setItem("email", email);
          return res;
        }
      });
  }

  checkToken(token) {
    return fetch(`${this.baseURL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => this._handleError(res))
      .then((res) => res.data);
  }
}

export const mainApi = new MainApi({
  baseURL: "http://localhost:3001",
  // baseURL: 'https://api.olganum.nomorepartiesxyz.ru',
});
