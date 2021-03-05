import { BASE_URL } from './config'

type Methods = 'get' | 'put' | 'delete' | 'post';

interface ApiTypes {
  method: Methods
  path: string
  data?: any
}

export const callApi = async ({ method, path, data }: ApiTypes) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}