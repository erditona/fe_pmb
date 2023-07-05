const urlParams = new URLSearchParams(window.location.search);
const pendaftaranId = urlParams.get("pendaftaranId");

export let urlPUT = "https://ws-dito.herokuapp.com/upd-pendaftaran/" + pendaftaranId;
export let urlPUTStat = "https://ws-dito.herokuapp.com/upd-status-pendaftaran/" + pendaftaranId;

export function AmbilResponse(result) {
  console.log(result); // Display API response in the console

  Swal.fire({
    title: "Notifikasi",
    text: result.message,
    icon: "info",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "table-pendaftaran.html"; // Reload the page after clicking OK
    }
  });
}
