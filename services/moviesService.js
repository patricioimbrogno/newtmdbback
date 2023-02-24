const axios = require("axios");
const tmdbAPI = "https://api.themoviedb.org/3";
const apiKey = "94edf85f6bf18e21bb971c775681efa6";

exports.getPopularMovies = async () => {
  try {
    const movies = await axios.get(`${tmdbAPI}/movie/popular?api_key=${apiKey}&language=es&page=1`);
    return { data: movies.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}

exports.getNowPlayingMovies = async () => {
  try {
    const movies = await axios.get(`${tmdbAPI}/movie/now_playing?api_key=${apiKey}&language=es&page=1`);
    return { data: movies.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}

exports.getTopRatedMovies = async () => {
  try {
    const movies = await axios.get(`${tmdbAPI}/movie/top_rated?api_key=${apiKey}&language=es&page=1`);
    return { data: movies.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}

exports.getUpcomingMovies = async () => {
  try {
    const movies = await axios.get(`${tmdbAPI}/movie/upcoming?api_key=${apiKey}&language=es&page=1`);
    return { data: movies.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}



exports.getMovie = async (id) => {
  try {
    const movie = await axios.get(`${tmdbAPI}/movie/${id}?api_key=${apiKey}&language=es&page=1`);
    return { data: movie.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}


