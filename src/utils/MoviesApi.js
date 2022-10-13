class MoviesApi {
  constructor(config) {
    this.url = config.url
    this.headers = config.headers
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status)
  }

  getCards() {
    return fetch(this.url, {
      headers: this.headers,
    }).then(this._checkResponse)
  }
}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
})
