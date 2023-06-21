// Fungsi untuk menangani klik tombol Sign In
function signUp() {
  // Mengambil nilai input dari form
  const firstName = document.getElementById("firstname").value;
  console.log(firstName);
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpass").value;

  // Validasi password
  if (password !== confirmPassword) {
    alert("Password confirmation does not match.");
    return;
  }

  // Membuat objek data yang akan dikirim ke server
  const data = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    password: password,
    confirmpass: confirmPassword,
  };

  // Mengirim data ke server menggunakan AJAX
  fetch("https://ws-dito.herokuapp.com/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      // Menampilkan pesan dari response dengan SweetAlert
      Swal.fire({
        title: "Success",
        text: result.message,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Mengarahkan pengguna ke halaman login.html
        window.location.reload;
        //   window.location.href = "login.html";
      });
    })
    .catch((error) => {
      // Menampilkan pesan error jika terjadi kesalahan dengan SweetAlert
      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
        confirmButtonText: "OK",
      });
    });
}
