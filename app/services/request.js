export default class RequestService {
  constructor(store) {
    this.store = store;
  }

  get(url) {
    return this.__fetch(url, 'GET')
  }

  post(url, payload) {
    return this.__fetch(url, 'POST', payload)
  }

  put(url, payload) {
    return this.__fetch(url, 'PUT', payload)
  }

  delete(url) {
    return this.__fetch(url, 'DELETE')
  }

  __fetch(url, method, payload) {
    let token = localStorage.getItem('token');
    return fetch('http://localhost:8889'+url, {
        method: method,
        headers: {
            "Content-type": "application/json",
            "X-Token": token
        },
        body: JSON.stringify(payload)
    }).then(response => {
      return response.json();
    });
  }

}