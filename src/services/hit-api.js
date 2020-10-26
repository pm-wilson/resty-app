export const hitApi = (url, method, body) => {
  if(method !== 'GET') {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json());
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json());
  }
};
