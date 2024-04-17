import BASE_URL from "./constant.js";
const spinner=document.querySelector(".spinner")
async function getData(endPoint) {
try {
  spinner.classList.remove("d-none")
  const response = await fetch(`${BASE_URL}/${endPoint}`);
  const data = await response.json();
  drawTable(data);
} catch (error) {
  
}
finally{
  spinner.classList.add("d-none")

}
}

console.log(getData("suppliers"));
const lists = document.querySelector(".list");

const tBody = document.querySelector(".tbody");

function drawTable(table) {
  tBody.innerHTML = "";
  table.forEach((data) => {
    tBody.innerHTML += `
        <tr>
        <td>${data.id}</td>
        <td>${data.companyName}</td>
        <td>${data.address.street}</td>
        <td>${data.address.phone}</td>
        <td>${data.address.city}</td>
        <td><a href="detail.html?id=${data.id}"class="details btn btn-primary">Details</a></td>
          <td><a class="edit btn btn-success">Edit</a></td>
          <td><a class="delete btn btn-danger">Delete</a></td>
      </tr>
    `;
    const details = document.querySelector(".details");

  });
}



