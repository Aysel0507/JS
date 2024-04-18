import { postSupplier } from "./category.js";

const allInputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const supplier = {
    companyName: allInputs[0].value,
    address: {
      street: allInputs[1].value,
      phone: allInputs[2].value,
      city: allInputs[3].value,
      country: allInputs[4].value,
    },
  };
  console.log(supplier);

  postSupplier(supplier);
});
