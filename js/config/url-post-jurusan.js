export let urlPOST = "https://ws-dito.herokuapp.com/ins-jurusan";

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  // alert(result.message); //menampilkan response API pada alert
  let responseMessageElement = document.getElementById("status");
  if (responseMessageElement) {
    responseMessageElement.textContent = result.message;
  }
  window.location.reload(); //reload halaman setelah klik ok pada alert
}
