export let urlPOST = "https://ws-dito.herokuapp.com/insrt-jurusan";

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  alert(result.message); //menampilkan response API pada alert
  window.location.reload(); //reload halaman setelah klik ok pada alert
}
