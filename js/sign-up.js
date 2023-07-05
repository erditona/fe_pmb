function signUp() {
  // Mengambil nilai input dari form
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpass").value;

  // Validasi input
  if (firstName.trim() === "") {
    Swal.fire({
      title: "Error",
      text: "First Name cannot be empty.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  if (lastName.trim() === "") {
    Swal.fire({
      title: "Error",
      text: "Last Name cannot be empty.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  if (email.trim() === "") {
    Swal.fire({
      title: "Error",
      text: "Email cannot be empty.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  // Validasi email dengan regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      title: "Error",
      text: "Invalid email format.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  if (password.trim() === "") {
    Swal.fire({
      title: "Error",
      text: "Password cannot be empty.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire({
      title: "Error",
      text: "Password confirmation does not match.",
      icon: "error",
      confirmButtonText: "OK",
    });
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
      if (result.status === 200) {
        Swal.fire({
          title: "Success",
          text: result.message,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Mengarahkan pengguna ke halaman login.html
          //   window.location.reload();
          window.location.href = "login.html";
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
    });
}

function PushButton() {
  let firstName = document.getElementById("firstname").value
  let lastName = document.getElementById("lastname").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let confirmpass = document.getElementById("confirmpass").value

  
  PostSignUp(firstName, lastName, email, password, confirmpass);
  document.getElementById("formsignup").style.display = 'none';
   
}