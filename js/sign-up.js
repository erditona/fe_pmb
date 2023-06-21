// Fungsi untuk menangani klik tombol Sign In
function signUp() {
  // Mengambil nilai input dari form
  const firstName = document.getElementById("firstname").value;
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
      // Menampilkan pesan dari response
      alert(result.message);
      // Mengosongkan nilai input setelah signup berhasil
      document.getElementById("signup-form").reset();
    })
    .catch((error) => {
      // Menampilkan pesan error jika terjadi kesalahan
      console.error("Error:", error);
    });
}
