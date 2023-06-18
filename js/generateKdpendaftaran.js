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

// Fungsi untuk memeriksa apakah kode pendaftaran sudah terdaftar di API
async function isKodePendaftaranTerdaftar(kodePendaftaran) {
  try {
    const response = await fetch(`https://ws-dito.herokuapp.com/pendaftaran/${kodePendaftaran}`);
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

  // Menggabungkan semua bagian untuk membentuk kode pendaftaran
  var kodePendaftaran = randomNum;

  // Memeriksa apakah kode pendaftaran sudah terdaftar di API
  const isTerdaftar = await isKodePendaftaranTerdaftar(kodePendaftaran);
  if (isTerdaftar) {
    // Jika kode pendaftaran sudah terdaftar, menghasilkan kode baru dengan increment angka acak
    var increment = parseInt(randomNum.substr(-2)) + 1;
    randomNum = randomNum.substr(0, randomNum.length - 2) + increment.toString().padStart(2, "0");
    kodePendaftaran = randomNum;
  }

  return kodePendaftaran;
}

// Mendapatkan elemen input kode pendaftaran
var kdpendaftaranInput = document.getElementById("kdpendaftaran");

// Mengisi nilai input kode pendaftaran dengan kode yang dihasilkan
generateKodePendaftaran()
  .then((kodePendaftaran) => {
    kdpendaftaranInput.value = kodePendaftaran;
    // Simpan angka acak berurutan ke localStorage
    localStorage.setItem("randomNum", kodePendaftaran);
  })
  .catch((error) => {
    console.error(error);
  });
