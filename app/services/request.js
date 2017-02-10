export default class Request {
  constructor(store) {
    this.store = store;
  }

  get(url) {
    return __fetch(url, 'GET')
  }

  post(url, payload) {
    return __fetch(url, 'POST', payload)
  }

  post(url, payload) {
    return __fetch(url, 'PUT', payload)
  }

  delete(url) {
    return __fetch(url, 'DELETE')
  }

  __fetch(url, method, payload) {
    return fetch(url, {
        method: method,
        headers: {
            "Content-type": "application/json"  
        },
        body: payload
    }).then(response => {
        
    });
  }

}