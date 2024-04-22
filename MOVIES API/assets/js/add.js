import {postMovies} from "./API/requests/index.js"
import {endpoints} from "./API/constant.js"

const allInputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const movies = {
    title: allInputs[0].value,
    genre: allInputs[1].value,
    country: allInputs[2].value,
    director: allInputs[3].value,
    ageRestriction: allInputs[4].value,
    releaseYear:allInputs[5].value,
    poster: allInputs[6].value,
    trailerURL: allInputs[7].value,
    description: allInputs[8].value
  };
  postMovies(endpoints.movies,movies);
  window.location.href="index.html"
});

