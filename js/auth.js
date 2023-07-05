function checkAuthentication() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("token");
  var raw = JSON.stringify({
    tokenstring: token,
  });

  if (!token) {
    redirectToSignIn();
  } else {
    // Make a GET request to the autentikasi endpoint
    fetch("https://ws-dito.herokuapp.com/auth", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
        } else {
          redirectToSignIn();
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        redirectToSignIn();
      });
  }
}

function redirectToSignIn() {
  Swal.fire({
    icon: "info",
    title: "Hayoo Mau Kemana",
    text: "Kamu harus Log-In terlebih dahulu",
    showCancelButton: false,
    confirmButtonText: "OK",
  }).then((result) => {
    // Redirect to login.html
    const currentLocation = window.location.pathname;
    if (currentLocation.includes("admin")) {
      window.location.href = "../auth/login.html";
    } else {
      window.location.href = "auth/login.html";
    }
  });
}

// Call the checkAuthentication function when the page loads
window.onload = checkAuthentication;

// window.onload = function () {
//   if (isAuthenticated()) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const token = getToken();
//     var raw = JSON.stringify({
//       tokenstring: token,
//     });

//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     fetch("https://ws-dito.herokuapp.com/auth", requestOptions)
//       .then((response) => {
//         if (response.ok) {
//           return response.json().then((result) => LoginBerhasil(result));
//         } else {
//           window.location.href = "../login.html";
//         }
//       })
//       .catch((error) => console.log("error", error));
//   } else {
//     // Redirect pengguna ke halaman login
//     window.location.href = "../login.html";
//   }
// };

// function isAuthenticated() {
//   const token = getToken();
//   if (token == null) {
//     return false;
//   }
//   return true;
// }

// function getToken() {
//   return localStorage.getItem("jwtToken");
// }

// function LoginBerhasil(result) {
//   document.getElementById("email").textContent = result.email;
// }
