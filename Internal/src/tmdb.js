import axios from "axios";
const API_KEY = "ebcbf938";
const BASE_URL = "http://www.omdbapi.com/";

// Fetch movies by search term (OMDB doesn't have /popular or /top_rated endpoints)
export const fetchMovies = (search = "Marvel") =>
  axios.get(`${BASE_URL}?s=${search}&apikey=${API_KEY}`);

// Fetch banner movie (first result from a search)
export const fetchBanner = (search = "Avengers") =>
  axios.get(`${BASE_URL}?s=${search}&apikey=${API_KEY}`);

// Fetch details by imdbID (OMDB does not provide trailers, but you can fetch details)
export const fetchDetails = (imdbID) =>
  axios.get(`${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`);