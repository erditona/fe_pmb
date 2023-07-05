function login() {
  // Mengambil nilai input dari form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validasi input
  if (email.trim() === "" || password.trim() === "") {
    Swal.fire({
      title: "Error",
      text: "Email and password tidak boleh kosong.",
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
        // const token = result.token; // Mendapatkan token dari respons server
        // console.log(result);
        // Menyimpan token di local storage
        localStorage.setItem("token", result.token);
        Swal.fire({
          title: "Success",
          text: result.message,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Mengarahkan pengguna ke halaman setelah login berhasil
          if (email === "admin01@gmail.com" || email === "admin02@gmail.com" || email === "admin03@gmail.com") {
            // Jika email adalah admin01@gmail.com
            window.location.href = "../admin/dashboard.html";
          } else {
            // Jika email bukan admin01@gmail.com
            window.location.href = "../profile.html";
          }
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
