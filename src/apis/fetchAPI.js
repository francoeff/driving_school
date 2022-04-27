const urlBase = 'http://localhost:7000/v1/';

const fetchAPI = async ( url, method = 'get', params = null ) => {
  let data = [];
  try {
    const token = localStorage.token || '';
    const result = await fetch( urlBase + url, {
      method,
      headers : {
        'Content-Type' : 'application/json',
        token
      },
      body : params ? JSON.stringify(params) : null
    });
    data = result.status !== 204 ? await result.json() : {status : true};
  } catch (e) {
    data = { error : e.toString() };
  } finally {
    if ( data.code && data.code === 'INVALID_TOKEN' ) alert('Actualizar Token!');
    return data;
  }
}

export default fetchAPI;