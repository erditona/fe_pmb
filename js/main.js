// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

//capitalizeEachWord

function capitalizeEachWord(value) {
  // Validate that the input contains only letters
  if (!/^[a-zA-Z\s]+$/.test(value)) {
    document.getElementById("status").textContent = "Masukan Nama Hanya Berupa Huruf";
    return ""; // Return an empty string to indicate invalid input
  }

  // Split the input value into an array of words
  let words = value.split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  }

  // Join the capitalized words back into a string
  return words.join(" ");
}

function capitalizeEachWord2(value) {
  // Validate that the input contains only letters and numbers
  if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
    document.getElementById("status").textContent = "Masukkan hanya huruf dan angka";
    return ""; // Return an empty string to indicate invalid input
  }

  // Split the input value into an array of words
  let words = value.split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  }

  // Join the capitalized words back into a string
  return words.join(" ");
}

//validasiInputKodeSekolah
function validateInput2(input) {
  // Remove non-digit characters
  let sanitizedValue = input.value.replace(/\D/g, "");

  // Limit to a maximum of 4 digits
  sanitizedValue = sanitizedValue.slice(0, 4);

  // Update the input value
  input.value = sanitizedValue;

  // Validate the input
  if (sanitizedValue.length !== 4) {
    document.getElementById("status").innerHTML = "Kode Sekolah harus terdiri dari 4 angka.";
  } else {
    document.getElementById("status").innerHTML = "";
  }
}

//validasi Phone_number
function validatePhoneNumber(phoneNumber) {
  const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-digit characters
  const limitedPhoneNumber = sanitizedPhoneNumber.slice(0, 13); // Limit to a maximum of 12 digits
  document.getElementById("phone_number").value = limitedPhoneNumber; // Update the input value

  if (sanitizedPhoneNumber.length > 13 || !sanitizedPhoneNumber.startsWith("0")) {
    if (!sanitizedPhoneNumber.startsWith("0")) {
      document.getElementById("status").textContent = "Nomor telepon harus diawali dengan angka 0.";
    } else {
      document.getElementById("status").textContent = "Format nomor telepon tidak valid. Harap masukkan angka maksimal 13 digit.";
    }
  } else {
    document.getElementById("status").textContent = "";
  }
}

//validasi input nomer ktp
function validateKTPNumber() {
  const ktpInput = document.getElementById("ktp");
  const statusElement = document.getElementById("status");

  ktpInput.oninput = function () {
    const value = this.value;
    const isInteger = /^\d+$/.test(value);
    const isValidLength = value.length === 16;

    if (isInteger && isValidLength) {
      statusElement.textContent = ""; // Clear the error message
    } else {
      statusElement.textContent = "Nomor KTP harus terdiri dari 16 digit.";
      // Trim the input value to 16 characters if it exceeds the limit
      this.value = value.slice(0, 16);
    }
  };
}
