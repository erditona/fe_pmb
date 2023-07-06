export let urlPOST = "https://ws-dito.herokuapp.com/ins-pendaftaran";

export function AmbilResponse(result) {
  console.log(result); // Tampilkan respons API di konsol

  Swal.fire({
    title: "Notifikasi",
    text: result.message,
    icon: "info",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("formdaftaruser").style.display = 'none';
      document.getElementById("berhasilDaftar").innerHTML = `
        <div class="card content-center items-center justify-center h-full" style="display: flex; justify-content: center;">
          <div class="card-header">
            Anda Sudah Terdaftar!
          </div>
         
        </div>
      `;
    }
  });
}


