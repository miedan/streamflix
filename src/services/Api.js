// request.js
const api_key = "8d8ff0b6170bff5622de6091db2a9140";
const base_url = "https://api.themoviedb.org/3";
// https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=8d8ff0b6170bff5622de6091db2a9140
const request = {
  popular: `${base_url}/movie/popular?language=en-US&page=1&page=1&api_key=${api_key}`,
  trending: `${base_url}/trending/movie/day?language=en-US&page=1&api_key=${api_key}`,
};

export default request;
