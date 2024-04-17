// const details = document.querySelector(".details");
const url = new URLSearchParams(window.location.search).get("id");
const wrapper = document.querySelector(".wrapper");
import BASE_URL from "./constant.js";

async function getData(endPoint, url) {
  try {
    const response = await fetch(`${BASE_URL}/${endPoint}/${url}`);
    const data = await response.json();
    drawCard(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
  }
}
getData("suppliers", url);

function drawCard(data) {
  wrapper.innerHTML = "";
  wrapper.innerHTML = ` <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${data.companyName}</h5>
      <p class="card-text">${data.contactTitle}</p>
      <a href="index.html" class="btn btn-primary go-back">Go Back</a>
    </div>
  </div>`;
}


