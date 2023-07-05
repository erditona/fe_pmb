export let urlPOST = "https://ws-dito.herokuapp.com/ins-pendaftaran";

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
      window.location.reload(); // Reload the page after clicking OK
    }
  });
}
