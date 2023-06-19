const urlParams = new URLSearchParams(window.location.search);
const jurusanId = urlParams.get("jurusanId");

export let urlPUT = "https://ws-dito.herokuapp.com/upd-jurusan/" + jurusanId;

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console

  let responseMessageElement = (document.getElementById("status").innerHTML = "<div class='text-center text-yellow-200 py-1.5 mb-5 bg-red-600 rounded-md'></div>");
  if (responseMessageElement) {
    responseMessageElement.textContent = result.message;
  }

  // Wait for 3 seconds (adjust the duration as needed)
  const duration = 3000; // 3 seconds
  setTimeout(() => {
    window.location.href = "table-jurusan.html"; //reload halaman setelah klik ok pada alert
  }, duration);
}
