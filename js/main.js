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

//validasiInputMax4Angka
function validateInput2(input) {
  // Remove non-digit characters
  let sanitizedValue = input.value.replace(/\D/g, "");

  // Limit to a maximum of 4 digits
  sanitizedValue = sanitizedValue.slice(0, 4);

  // Update the input value
  input.value = sanitizedValue;
}

//validasi Phone_number
function validatePhoneNumber(phoneNumber) {
  const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-digit characters
  const limitedPhoneNumber = sanitizedPhoneNumber.slice(0, 12); // Limit to a maximum of 12 digits
  document.getElementById("phone_number").value = limitedPhoneNumber; // Update the input value

  if (sanitizedPhoneNumber.length > 12 || !sanitizedPhoneNumber.startsWith("0")) {
    if (!sanitizedPhoneNumber.startsWith("0")) {
      document.getElementById("status").textContent = "Nomor telepon harus diawali dengan angka 0.";
    } else {
      document.getElementById("status").textContent = "Format nomor telepon tidak valid. Harap masukkan angka maksimal 12 digit.";
    }
  } else {
    document.getElementById("status").textContent = "";
  }
}
