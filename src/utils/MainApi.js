class MainApi {
  constructor(config) {
    this._headersAuth = config.headersAuth;
    this._usersApiUrl = config.usersApiUrl;
  }


  handleError(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`)
  }



  handleRegistration(name, pass, email) {

    return fetch(`${this._usersApiUrl}/signup`, {
        method: 'POST',
        headers: this._headersAuth,
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
        headers: this._headersAuth,
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

  saveFilm(country, director, duration, year, 
    description, image, trailer, nameRU, nameEN, 
    thumbnail, movieId) {

    return fetch(`${this._usersApiUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers
      body: JSON.stringify({
          country: country,
          director: director,
          duration: duration,
          year: year,
          description: description,
          image: image,
          trailer: trailer,
          nameRU: nameRU,
          nameEN: nameEN,
          thumbnail: thumbnail,
          movieId: movieId
        })
    })
    .then(res => this.error(res));

  }


}

export const mainApi = new MainApi({
  // authorizationUrl: 'https://api.mesto.niki-konkin.nomoredomains.work',
  usersApiUrl: 'http://localhost:3000',
  headersAuth: {
    'Content-Type': 'application/json'
  },
});
