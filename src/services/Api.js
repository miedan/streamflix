const api_key = "8d8ff0b6170bff5622de6091db2a9140";
const base_url = "https://api.themoviedb.org/3";

const request = {
  popular: `${base_url}/movie/popular?language=en-US&page=1&page=1&api_key=${api_key}`,
  trending: `${base_url}/trending/movie/day?language=en-US&page=1&api_key=${api_key}`,
  newrelease : `${base_url}/tv/airing_today?language=en-US&page=1&api_key=${api_key}`,
  toprated : `${base_url}/movie/top_rated?language=en-US&page=1&api_key=${api_key}`,
  upcoming : `${base_url}/movie/ /upcoming?language=en-US&page=1&api_key=${api_key}`,
  
  toprated_tvseries : `${base_url}/tv/top_rated?language=en-US&page=1&api_key=${api_key}`,
  newrelease_tvseries : `${base_url}/tv/airing_today?language=en-US&page=1&api_key=${api_key}`,
  popular_tvseries : `${base_url}/tv/popular?language=en-US&page=1&api_key=${api_key}`,

};

export default request;
