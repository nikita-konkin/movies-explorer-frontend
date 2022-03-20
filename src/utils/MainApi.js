class MainApi {
  constructor(config) {
    this._headers = config.headers;
    this._usersApiUrl = config.usersApiUrl;
  }


  error(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`)
  }



  handleRegistration(name, pass, email) {

    return fetch(`${this._usersApiUrl}/signup`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          password: pass,
          email: email
        })
      })
      .then(res => this.handleError(res));

  }

  handleAuthorization(email, pass) {

    return fetch(`${this._usersApiUrl}/signin`, {
        method: 'POST',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          email: email,
          password: pass
        })
      })
      .then(res => this.handleError(res));

  }

  handleTokenValidation(JWT) {

    return fetch(`${this._usersApiUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JWT}`
      }
    }).then(res => this.handleError(res));

  }

  saveFilm(data, url) {

    return fetch(`${this._usersApiUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: parseInt(data.year),
          description: data.description,
          image: url+data.image.url,
          trailer: data.trailer,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          thumbnail: url+data.image.formats.thumbnail.url,
          trailerLink: data.trailerLink,
          movieId: data.id
        })
    })
    .then(res => this.error(res));

  }


}

export const mainApi = new MainApi({
  // authorizationUrl: 'https://api.mesto.niki-konkin.nomoredomains.work',
  usersApiUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  },
});
