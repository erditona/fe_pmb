import Swal from "sweetalert2";

function deleteData(IDHAPUS) {
  var sekolahId = IDHAPUS;
  var target_url = "https://ws-dito.herokuapp.com/delete-sekolah/" + sekolahId;

  Swal.fire({
    title: "Confirmation",
    text: "Apakah Anda yakin ingin menghapus data ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak",
  }).then((result) => {
    if (result.isConfirmed) {
      var requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };

      fetch(target_url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          Swal.fire({
            title: "Notification",
            text: result.message,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          }).then(() => {
            location.reload();
          });
        })
        .catch((error) => console.log("Error:", error));
    }
  });
}
