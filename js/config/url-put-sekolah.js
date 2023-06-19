const urlParams = new URLSearchParams(window.location.search);
const sekolahId = urlParams.get("sekolahId");

export let urlPUT = "https://ws-dito.herokuapp.com/upd-sekolah/" + sekolahId;

export function AmbilResponse(result) {
  console.log(result); // Display API response in the console

  Swal.fire({
    title: "Notification",
    text: result.message,
    icon: "info",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "table-sekolah.html"; // Reload the page after clicking OK
    }
  });
}
