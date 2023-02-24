const axios = require("axios");
const tmdbAPI = "https://api.themoviedb.org/3";
const apiKey = "94edf85f6bf18e21bb971c775681efa6";

exports.getSearchedFeature = async (result) => {
  try {
    const feature = await axios.get(`${tmdbAPI}/search/multi/?api_key=${apiKey}&language=es&query=${result}&include_adult=false`);
    return { data: feature.data };
  } catch ({ response }) {
    const { error } = response.data;
    console.error(error);
    return { error: true, data: error };
  }
}
