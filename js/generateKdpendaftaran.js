// // Fungsi untuk menghasilkan kode pendaftaran
// function generateKodePendaftaran() {
//   // Mendapatkan tanggal sekarang
//   var currentDate = new Date();
//   // Mendapatkan dua digit tahun terakhir
//   var year = currentDate.getFullYear().toString().substr(-2);
//   // Mendapatkan dua digit bulan
//   var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
//   // Mendapatkan dua digit tanggal
//   var day = currentDate.getDate().toString().padStart(2, "0");

//   // Mengambil angka acak berurutan dari localStorage
//   var randomNum = localStorage.getItem("randomNum");
//   // Jika angka acak belum ada atau lebih kecil dari tanggal sekarang, inisialisasi dengan tanggal sekarang
//   if (!randomNum || parseInt(randomNum.substr(0, 6)) < parseInt(day + month + year)) {
//     randomNum = day + month + year + "01";
//   }

//   // Menggabungkan semua bagian untuk membentuk kode pendaftaran
//   var kodePendaftaran = randomNum;
//   return kodePendaftaran;
// }

// // Mendapatkan elemen input kode pendaftaran
// var kdpendaftaranInput = document.getElementById("kdpendaftaran");
// // Mengisi nilai input kode pendaftaran dengan kode yang dihasilkan
// kdpendaftaranInput.value = generateKodePendaftaran();

// // Simpan angka acak berurutan ke localStorage
// localStorage.setItem("randomNum", kdpendaftaranInput.value);

// async function isKodePendaftaranTerdaftar(kodePendaftaran) {
//   try {
//     const response = await fetch(`https://ws-dito.herokuapp.com/pendaftaran?_id=${kodePendaftaran}`);
//     const data = await response.json();
//     return response.ok && data.length > 0;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

// // Fungsi untuk menghasilkan kode pendaftaran yang belum terdaftar
// async function generateKodePendaftaran() {
//   // Mendapatkan tanggal sekarang
//   var currentDate = new Date();
//   // Mendapatkan dua digit tahun terakhir
//   var year = currentDate.getFullYear().toString().substr(-2);
//   // Mendapatkan dua digit bulan
//   var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
//   // Mendapatkan dua digit tanggal
//   var day = currentDate.getDate().toString().padStart(2, "0");

//   // Mengambil angka acak berurutan dari localStorage
//   var randomNum = localStorage.getItem("randomNum");
//   // Jika angka acak belum ada atau lebih kecil dari tanggal sekarang, inisialisasi dengan tanggal sekarang
//   if (!randomNum || parseInt(randomNum.substr(0, 6)) < parseInt(day + month + year)) {
//     randomNum = day + month + year + "01";
//   }

//   // Menggabungkan semua bagian untuk membentuk kode pendaftaran
//   var kodePendaftaran = randomNum;

//   // Memeriksa apakah kode pendaftaran sudah terdaftar di API
//   const isTerdaftar = await isKodePendaftaranTerdaftar(kodePendaftaran);
//   if (isTerdaftar) {
//     // Jika kode pendaftaran sudah terdaftar, menghasilkan kode baru dengan increment angka acak
//     var increment = parseInt(randomNum.substr(-2)) + 1;
//     randomNum = randomNum.substr(0, randomNum.length - 2) + increment.toString().padStart(2, "0");
//     kodePendaftaran = randomNum;
//   }

//   // Simpan angka acak berurutan ke localStorage
//   localStorage.setItem("randomNum", kodePendaftaran);

//   return kodePendaftaran;
// }

// // Mendapatkan elemen input kode pendaftaran
// var kdpendaftaranInput = document.getElementById("kdpendaftaran");

// // Mengisi nilai input kode pendaftaran dengan kode yang dihasilkan
// generateKodePendaftaran()
//   .then((kodePendaftaran) => {
//     kdpendaftaranInput.value = kodePendaftaran;
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Fungsi untuk menghasilkan kode pendaftaran sederhana
// function generateKodePendaftaran() {
//   // Mendapatkan tanggal sekarang
//   var currentDate = new Date();
//   // Mendapatkan dua digit tahun terakhir
//   var year = currentDate.getFullYear().toString().substr(-2);
//   // Mendapatkan dua digit bulan
//   var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
//   // Mendapatkan dua digit tanggal
//   var day = currentDate.getDate().toString().padStart(2, "0");

//   // Mengambil angka acak berurutan dari localStorage
//   var randomNum = localStorage.getItem("randomNum");
//   // Jika angka acak belum ada, inisialisasi dengan 1
//   if (!randomNum) {
//     randomNum = 1;
//   } else {
//     // Jika angka acak sudah ada, tambahkan 1
//     randomNum = parseInt(randomNum) + 1;
//   }
//   // Simpan angka acak berurutan ke localStorage
//   localStorage.setItem("randomNum", randomNum);

//   // Menggabungkan semua bagian untuk membentuk kode pendaftaran
//   var kodePendaftaran = day + month + year + randomNum.toString().padStart(2, "0");
//   return kodePendaftaran;
// }

// // Mendapatkan elemen input kode pendaftaran
// var kdpendaftaranInput = document.getElementById("kdpendaftaran");
// // Mengisi nilai input kode pendaftaran dengan kode yang dihasilkan
// kdpendaftaranInput.value = generateKodePendaftaran();

async function isKodePendaftaranTerdaftar(kodePendaftaran) {
  try {
    const response = await fetch(`https://ws-dito.herokuapp.com/pendaftaran/kd/${kodePendaftaran}`);
    const data = await response.json();
    return response.ok && data.length > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Fungsi untuk menghasilkan kode pendaftaran yang belum terdaftar
async function generateKodePendaftaran() {
  // Mendapatkan tanggal sekarang
  var currentDate = new Date();
  // Mendapatkan dua digit tahun terakhir
  var year = currentDate.getFullYear().toString().substr(-2);
  // Mendapatkan dua digit bulan
  var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  // Mendapatkan dua digit tanggal
  var day = currentDate.getDate().toString().padStart(2, "0");

  // Mengambil angka acak berurutan dari localStorage
  var randomNum = localStorage.getItem("randomNum");
  // Jika angka acak belum ada atau lebih kecil dari tanggal sekarang, inisialisasi dengan tanggal sekarang
  if (!randomNum || parseInt(randomNum.substr(0, 6)) < parseInt(day + month + year)) {
    randomNum = day + month + year + "01";
  }

  // Memeriksa apakah kode pendaftaran sudah terdaftar di API
  var isTerdaftar = await isKodePendaftaranTerdaftar(randomNum);
  if (isTerdaftar) {
    // Jika kode pendaftaran sudah terdaftar, mencari kode pendaftaran yang belum terdaftar
    var increment = 1;
    do {
      var newRandomNum = parseInt(randomNum.substr(-2)) + increment;
      randomNum = randomNum.substr(0, randomNum.length - 2) + newRandomNum.toString().padStart(2, "0");
      isTerdaftar = await isKodePendaftaranTerdaftar(randomNum);
      increment++;
    } while (isTerdaftar);
  }

  // Simpan angka acak berurutan ke localStorage
  localStorage.setItem("randomNum", randomNum);

  // Menggabungkan semua bagian untuk membentuk kode pendaftaran
  var kodePendaftaran = randomNum;

  return kodePendaftaran;
}

// Mendapatkan elemen input kode pendaftaran
var kdpendaftaranInput = document.getElementById("kdpendaftaran");

// Mengisi nilai input kode pendaftaran dengan kode yang dihasilkan
generateKodePendaftaran()
  .then((kodePendaftaran) => {
    kdpendaftaranInput.value = kodePendaftaran;
  })
  .catch((error) => {
    console.error(error);
  });

// Menyimpan angka acak berurutan ke localStorage setelah insert dilakukan
document.getElementById("form-pendaftaran").addEventListener("submit", function (event) {
  event.preventDefault();

  var kodePendaftaran = kdpendaftaranInput.value;

  fetch("https://ws-dito.herokuapp.com/pendaftaran", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      kdpendaftar: kodePendaftaran,
      biodata: {
        ktp: 1234567890,
        nama: "John Doe",
        phone_number: "081234567890",
        alamat: "Jl. Contoh Alamat",
      },
      asalsekolah: {
        nama: "SMA Contoh",
        phone_number: "081234567891",
        alamat: "Jl. Contoh Alamat Sekolah",
      },
      jurusan: {
        kdjurusan: "123",
        nama: "Contoh Jurusan",
        jenjang: "S1",
      },
      jalur: "Rapot",
      alulbi: "Rekomendasi",
      aljurusan: "Keren dan Menarik",
    }),
  })
    .then((response) => {
      if (response.ok) {
        // Mengupdate nilai input kode pendaftaran setelah insert dilakukan
        generateKodePendaftaran()
          .then((newKodePendaftaran) => {
            kdpendaftaranInput.value = newKodePendaftaran;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
