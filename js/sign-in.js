function login() {
  // Mengambil nilai input dari form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validasi input
  if (email.trim() === "" || password.trim() === "") {
    Swal.fire({
      title: "Error",
      text: "Email and password cannot be empty.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  // Membuat objek data yang akan dikirim ke server
  const data = {
    email: email,
    password: password,
  };

  // Mengirim data ke server menggunakan AJAX
  fetch("https://ws-dito.herokuapp.com/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.status === 200) {
        Swal.fire({
          title: "Success",
          text: result.message,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Mengarahkan pengguna ke halaman setelah login berhasil (misalnya dashboard.html)
          window.location.href = "../admin/dashboard.html";
        });
      } else {
        // Menampilkan pesan error menggunakan SweetAlert
        Swal.fire({
          title: "Error",
          text: result.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    })
    .catch((error) => {
      // Menampilkan pesan error jika terjadi kesalahan
      Swal.fire({
        title: "Error",
        text: "An error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error:", error);
    });
}
