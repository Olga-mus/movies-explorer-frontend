export class MainApi {
  constructor(config) {
    this.baseURL = config.baseURL
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`)
  }

  //возвращает информацию о пользователе (email и имя)
  getProfile(token) {
    return fetch(`${this.baseURL}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse)
  }

  //обновляет информацию о пользователе (email и имя)
  editProfile({ email, name }, token) {
    return fetch(`${this.baseURL}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
      }),
    }).then(this._checkResponse)
  }

  //возвращает все сохранённые текущим  пользователем фильмы
  getSaveMovies(token) {
    return fetch(`${this.baseURL}/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse)
  }

  //создаёт фильм с переданными в теле
  // country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId

  postMovies(movie, token) {
    return fetch(`${this.baseURL}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    }).then(this._checkResponse)
  }

  //удаляет сохранённый фильм по id

  deleteMovie(id, token) {
    return fetch(`${this.baseURL}/movies/${id}`, {
      method: 'DELETE',
      //
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse)
  }

  _handleError(res) {
    return res.ok ? res.json() : Promise.reject(res.status)
  }

  register({ name, email, password }) {
    return fetch(`${this.baseURL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((res) => this._handleError(res))
  }

  authorize({ email, password }) {
    return fetch(`${this.baseURL}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._handleError(res))
  }

  checkToken(token) {
    return fetch(`${this.baseURL}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then((res) => this._handleError(res))
  }
}

export const mainApi = new MainApi({
  // baseURL: 'http://localhost:3001',
  baseURL: 'https://api.olganum.nomorepartiesxyz.ru',
})
