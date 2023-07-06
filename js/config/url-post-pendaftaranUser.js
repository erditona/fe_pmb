export let urlPOST = "https://ws-dito.herokuapp.com/ins-pendaftaran";

export function AmbilResponse(result) {
  console.log(result); // Tampilkan respons API di konsol

  Swal.fire({
    title: "Notifikasi",
    text: result.message,
    icon: "info",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  }).then((swalResult) => {
    if (swalResult.isConfirmed) {
      document.getElementById("formdaftaruser").style.display = "none";
      if (result.returned_kdpendaftar && result.returned_status) {
        document.getElementById("berhasilDaftar").innerHTML = `
          <div class="card content-center items-center justify-center h-full" style="display: flex; justify-content: center;">
            <div class="card-header">
              Anda Sudah Terdaftar!
            </div>
            <div class="card-body">
              <p>Kode Pendaftar: ${result.returned_kdpendaftar}</p>
              <p>Status Pendaftar: ${result.returned_status}</p>
            </div>
          </div>
        `;
      } else {
        document.getElementById("berhasilDaftar").innerHTML = `
          <div class="card content-center items-center justify-center h-full" style="display: flex; justify-content: center;">
            <div class="card-header">
              Terjadi Kesalahan
            </div>
            <div class="card-body">
              <p>Gagal memperoleh informasi pendaftaran.</p>
            </div>
          </div>
        `;
      }
    }
  });
}
