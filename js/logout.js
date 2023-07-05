function logout() {
  Swal.fire({
    title: "Keluar",
    text: "Anda Yakin Ingin Keluar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Keluar",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      // Menghapus token dari local storage
      localStorage.removeItem("token");

      // Redirect ke halaman login
      window.location.href = "../auth/login.html";
    }
  });
}
