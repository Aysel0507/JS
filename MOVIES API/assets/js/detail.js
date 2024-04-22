const url = new URLSearchParams(window.location.search);
const id = url.get("id");
const spinner = document.querySelector(".spinner");
import { getOne } from "./API/requests/index.js";
console.log(id);
window.addEventListener("load", () => {
  getOne("/movies", id).then((res) => {
    console.log(res);
    drawCard(res.data[0]);
    console.log(id);
  });
});


function drawCard(movie) {
  console.log(movie);
  spinner.innerHTML = `<div class="col-8">
  <div class="card" style="width: 18rem">
      <div class="card-body">
          <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.director}</p>
          <p class="card-text">${movie.description}</p>
          <p class="card-text">${movie.ageRestriction}</p>
          <a href="index.html" class="btn btn-primary go-back">Go Back</a>
      </div>
    </div>
</div>`;
}
