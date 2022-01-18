// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

function notifyAddSuccessful(name){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Ok...",
    html: `¡<b>${name}</b> agregado con éxito!`,
    showConfirmButton: false,
    timer: 1500,
  });
}
function notifyAddFail(name){
  Swal.fire({
    position: "top-end",
    icon: "warning",
    title: "Oops...",
    html: `¡<b>${name}</b> ya fue seleccionado!`,
    showConfirmButton: false,
    timer: 1500,
  });
}
function notifyDeletedSuccessful(name){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Ok...",
    html: `¡<b>${name}</b> eliminado con éxito!`,
    showConfirmButton: false,
    timer: 1500,
  });
}
function consoleLogError(error) {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error);
}
export { consoleLogError, notifyAddSuccessful, notifyAddFail, notifyDeletedSuccessful };