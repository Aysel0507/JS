import BASE_URL from "./constant.js";

const endpoint = "/suppliers";

export async function deleteSupplierByID(id) {
  try {
    let response = await axios.delete(BASE_URL + endpoint + `/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function postSupplier(newSupplier){
  let response=null;
  await axios.post(BASE_URL + endpoint, newSupplier)
  .then((res)=>{
   response=res
  
  }).catch((err)=>{
    response=err
  })
}

