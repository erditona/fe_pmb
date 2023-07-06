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
      localStorage.removeItem("profileName");

      // Redirect ke halaman login
      const currentLocation = window.location.pathname;
      if (currentLocation.includes("admin")) {
        window.location.href = "../auth/login.html";
      } else {
        window.location.href = "auth/login.html";
      }
    }
  });
}
