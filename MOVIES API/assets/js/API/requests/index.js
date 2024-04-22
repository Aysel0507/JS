import API_BASE_URL from "../constant.js";

//getAll
export async function getAll(endpoint) {
  let obj = {
    data: null,
    error: null,
  };
  await axios
    .get(API_BASE_URL + endpoint)
    .then((result) => {
      obj.data = result.data;
    })
    .catch((err) => {
      obj.error = err;
    });
  return obj;
}

//getOne
export async function getOne(endpoint, id) {
  let obj = {
    data: null,
    error: null,
  };
  await axios
    .get(API_BASE_URL + endpoint + `?id=${id}`)
    .then((result) => {
      obj.data = result.data;
    })
    .catch((err) => {
      obj.error = err;
    });
  return obj;
}

//post
// export async function postMovies(endpoint,payload){
//     const response=await axios.post(API_BASE_URL+endpoint, payload);
//     return response;
// }

export async function postMovies(endpoint, newMovies) {
  await axios
    .post(API_BASE_URL + endpoint, newMovies)
    .then((res) => {
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Movie added successfully.",
        }).then(() => {
          // window.location.href = "index.html";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    });
}

//delete
export async function deleteOne(endpoint, id) {
  const response = await axios.delete(API_BASE_URL + endpoint + `/${id}`);
  return response;
}

//put
export async function update(endpoint, id, payload) {
  const response = await axios.put(API_BASE_URL + endpoint + `/${id}`, payload);
  return response;
}
