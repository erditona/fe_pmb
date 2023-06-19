const urlParams = new URLSearchParams(window.location.search);
const jurusanId = urlParams.get("jurusanId");

export let urlPUT = "https://ws-dito.herokuapp.com/upd-jurusan/" + jurusanId;

export function AmbilResponse(results) {
  console.log(results); //menampilkan response API pada console
  alert(results.message); //menampilkan response API pada alert
  window.location.href = "table-jurusan.html"; //reload halaman setelah klik ok pada alert
}
