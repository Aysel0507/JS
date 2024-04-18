let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

let allUsers=getLocalStorage() || []
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.id = Date.now();
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();


  // let bool=allUsers.some((item)=>)

  let user = new User(
    allInputs[0].value,
    allInputs[1].value,
    allInputs[2].value
  );

  allUsers.push(user)

  setLocalStorage(allUsers)

  allInputs.forEach((item)=> item.value='')
});


function setLocalStorage(arr) {
  localStorage.setItem("users", JSON.stringify(arr));
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("users"));
}
