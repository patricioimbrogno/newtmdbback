const axios = require("axios");
const tmdbAPI = "https://api.themoviedb.org/3";
const apiKey = "94edf85f6bf18e21bb971c775681efa6";

exports.getPopularTVShows = async () => {
  try {
    const shows = await axios.get(`${tmdbAPI}/tv/popular?api_key=${apiKey}&language=es&page=1`);
    return { data: shows.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}


exports.getAiringTodayTVShows = async () => {
  try {
    const shows = await axios.get(`${tmdbAPI}/tv/airing_today?api_key=${apiKey}&language=es&page=1`);
    return { data: shows.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}

exports.getTopRatedTVShows = async () => {
  try {
    const shows = await axios.get(`${tmdbAPI}/tv/top_rated?api_key=${apiKey}&language=es&page=1`);
    return { data: shows.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}

exports.getOnTheAirTVShows = async () => {
  try {
    const shows = await axios.get(`${tmdbAPI}/tv/on_the_air?api_key=${apiKey}&language=es&page=1`);
    return { data: shows.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}

exports.getTVShow = async (id) => {
  try {
    const show = await axios.get(`${tmdbAPI}/tv/${id}?api_key=${apiKey}&language=es&page=1`);
    return { data: show.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}