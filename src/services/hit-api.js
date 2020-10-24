export const hitApi = (url, body, method) => {
  if(method === 'GET') {
    return fetch(url, {
      method,
    })
      .then(res => res.json());
  } else {
    return fetch(url, {
      method,
      body,
    })
      .then(res => res.json());
  }
};
