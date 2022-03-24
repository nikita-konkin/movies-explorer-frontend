class MoviesApi {
  constructor(config) {
    this._cardsUrl = config.cardsUrl;
  }

  error(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialCards() {

    return fetch(`${this._cardsUrl}`, {
        method: "GET",
        // credentials: 'include',
        headers: this._headers
      })
      // .then(res => res.json())
      .then(res => this.error(res));
  }

  

}

export const moviesApi = new MoviesApi({
  cardsUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }

});
