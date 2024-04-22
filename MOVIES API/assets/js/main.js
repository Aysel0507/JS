import { getAll } from "./API/requests/index.js";
import { endpoints } from "./API/constant.js";
import { deleteOne } from "./API/requests/index.js";
import {update} from "./API/requests/index.js"
import {getOne} from "./API/requests/index.js"



const editForm = document.querySelector("#edit-form");
const titleInp = document.querySelector("#title");
const posterInp = document.querySelector("#poster");
const trailerURLInp = document.querySelector("#trailerURL");
const genreInp = document.querySelector("#genre");
const ageInp = document.querySelector("#age");
const countryInp = document.querySelector("#country");
const directorInp = document.querySelector("#director");
const descTextArea = document.querySelector("#desc");

const moviesWrapper = document.querySelector('.movies-wrapper');
window.addEventListener("load", () => {
    getAll(endpoints.movies).then((res) => {
        renderCards(res.data);
    });
});

function renderCards(arr) {
    moviesWrapper.innerHTML = "";
    arr.forEach((movie) => {
        moviesWrapper.innerHTML += `  <div class="col-lg-3 col-md-6 col-sm-12" data-id=${movie.id} data-editing="false">
          <div class="card">
              <div class="card-img">
                  <img class="card-img-top"
                      src="${movie.poster}"
                      alt="${movie.title}">
                      title=${movie.title}
              </div>
              <div class="card-body">
              <marquee class="card-title" direction="left" behavior="scroll" scrollamount="6">${movie.title}</marquee>
                  <div class="d-flex justify-content-between align-items-center">
                      <button class="trailer-btn btn btn-outline-secondary mb-0">click for trailer</button> <br>
                      <div class="age-restriction">
                          <span>${movie.ageRestriction}</span>
                      </div>
                  </div>
                  <hr>
                  <iframe width="853" height="480" src="${movie.trailerURL}" title="${movie.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <a href="detail.html?id=${movie.id}" class="btn btn-outline-info info-btn">
                      <i class="fa-solid fa-circle-info"></i>
                  </a>
                  <button class="btn btn-outline-primary edit-btn"  data-bs-toggle="modal" data-bs-target="#editModal">
                      <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btn btn-outline-danger delete-btn">
                      <i class="fa-solid fa-trash"></i>
                  </button>
              </div>
          </div>
      </div>`;
    })

    //delete btns
    const deleteBtns = document.querySelectorAll(".delete-btn");
        deleteBtns.forEach((btn) => {
            btn.addEventListener("click",function () {
                const id = this.closest(".col-lg-3").getAttribute("data-id");
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        deleteOne(endpoints.movies, id);
                        this.closest(".col-lg-3").remove();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                });
            });
        });


        
    
    //edit buttons
 const editBtns = document.querySelectorAll(".edit-btn");
 editBtns.forEach((btn) => {
   btn.addEventListener("click", async function () {
     const id = this.closest(".col-lg-3").getAttribute("data-id");
     const response = await getOne(endpoints.movies, id);
     const movie = response.data[0];
     titleInp.value = movie.title;
     genreInp.value = movie.genre;
     posterInp.value = movie.poster; 
     trailerURLInp.value = movie.trailerURL;
     ageInp.value = movie.ageRestriction;
     countryInp.value = movie.country;
     directorInp.value = movie.director;
     descTextArea.value = movie.description;

     this.closest('.col-lg-3').setAttribute('data-editing','true');
   });
 });
    
  };

  editForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const cards = document.querySelectorAll('.col-lg-3');
    let id;
    Array.from(cards).map((card)=>{
      if (card.getAttribute('data-editing')=='true') {
        id = card.getAttribute('data-id');
        card.setAttribute('data-editing','false');
      }
    });
  
    const updatedMovie = {
      title: titleInp.value, 
      genre: genreInp.value, 
      country: countryInp.value, 
      director: directorInp.value,
      ageRestriction: ageInp.value,
      poster: posterInp.value,
      trailerURL: trailerURLInp.value,
      description: descTextArea.value
    }
    update(endpoints.movies, id, updatedMovie).then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Movie Updated Successfully!",
        showConfirmButton: false,
        timer: 1500
      });
      getAll(endpoints.movies).then((res)=>{
        renderCards(res.data);
      });
    })
  });

   
  const sortSelectOption =document.querySelector('.sort-by-name-select');

  sortSelectOption.addEventListener('change',async(e)=>{
    console.log('e: ', e.target.value);
    let res = await getAll(endpoints.movies);
    if (e.target.value == 'ascending') {
      let sortedArr = [...res.data].sort((x,y)=>x.title.localeCompare(y.title));
      renderCards(sortedArr);
    }
    else if(e.target.value == 'descending'){
      let sortedArr = [...res.data].sort((x,y)=>y.title.localeCompare(x.title));
      renderCards(sortedArr);
    }
  });




// search btn 
const searchInput=document.querySelector("#searchInput");
const searchBtn=document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
      getAll(endpoints.movies).then((res) => {
        renderCards(res.data);})
    } else {
        const cards = document.querySelectorAll('.col-lg-3');
        const filteredMovies = Array.from(cards).filter(card =>
            card.querySelector('.card-title').textContent.toLowerCase().includes(searchTerm)
        );
        renderFilteredCards(filteredMovies);
    }
});

function renderFilteredCards(filteredMovies) {
    moviesWrapper.innerHTML = "";
    filteredMovies.forEach((movie) => {
        moviesWrapper.appendChild(movie);
    });
}



 