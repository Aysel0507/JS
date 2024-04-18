<<<<<<< HEAD
// let second=window.prompt("enter second");
// console.log(parseInt(second/60)+"deqiqe"+(second%60)+"saniye");

// let selsi=window.prompt("enter temp");
// console.log(parseFloat(x=5/9*(selsi-32)));

// let a,b,c,d,e
// a=+window.prompt("enter score");
// b=+window.prompt("enter score");
// c=+window.prompt("enter score");
// d=+window.prompt("enter score");
// e=+window.prompt("enter score");
// console.log(((a+b+c+d+e)/5));

// let year=window.prompt("enter year");
// console.log(parseInt(2024-year));

// let a,b;
// a=window.prompt("enter year");
// b=window.prompt("enter year");
// console.log(parseInt((a*b)/100));

// let a,b;
// a=window.prompt("enter year");
// b=window.prompt("enter year");
// console.log(parseInt((a*b)/2));

// let a,b,c;
// a=window.prompt("enter year");
// b=window.prompt("enter year");
// c=window.prompt("enter year");
// console.log(parseInt(a*b/100/c));

// let firstName,lastName;
// firstName=window.prompt("enter year");
// lastName=window.prompt("enter year");
// console.log(parseInt(hello));

// let a=window.prompt("enter year");
// let p=4*a;
// let s=a**2;
// console.log(p,s);


let a,b;
a=window.prompt("enter year");
b=window.prompt("enter year");
console.log(((a+b)**3) (a**3+b**3));


=======
import BASE_URL from "./constant.js";
import { deleteSupplierByID } from "./category.js";
const spinner = document.querySelector(".spinner");
async function getData(endPoint) {
  try {
    spinner.classList.remove("d-none");
    const response = await fetch(`${BASE_URL}/${endPoint}`);
    const data = await response.json();
    drawTable(data);
  } catch (error) {
  } finally {
    spinner.classList.add("d-none");
  }
}

console.log(getData("suppliers"));
const lists = document.querySelector(".list");

const tBody = document.querySelector(".tbody");



function drawTable(table) {
  tBody.innerHTML = "";
  table.forEach((data) => {
    tBody.innerHTML += `
        <tr">
        <td>${data.id}</td>
        <td>${data.companyName}</td>
        <td>${data.address.street}</td>
        <td>${data.address.phone}</td>
        <td>${data.address.city}</td>
        <td><a href="detail.html?id=${data.id}"class="details btn btn-primary">Details</a></td>
          <td><a class="edit btn btn-success">Edit</a></td>
          <td><button class="delete btn btn-danger" data-id=${data.id}>Delete</button></td>
      </tr>
    `;


  });

  const deleteBtns = document.querySelectorAll(".delete");
  console.log(deleteBtns)

  deleteBtns.forEach((supplier) => {
    supplier.addEventListener("click", function () {
      const id =this.getAttribute("data-id");
      console.log(id)
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
          deleteSupplierByID(id);
          this.closest("tr").remove();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}
>>>>>>> dc94570 (added)
