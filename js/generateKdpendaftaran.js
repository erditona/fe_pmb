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

// // Cek apakah kode pendaftaran sudah ada di localStorage
// var storedKodePendaftaran = localStorage.getItem("kdpendaftaran");
// if (storedKodePendaftaran) {
//   kdpendaftaranInput.value = storedKodePendaftaran;
// } else {
//   // Jika belum ada, generate kode pendaftaran baru
//   var generatedKodePendaftaran = generateKodePendaftaran();
//   kdpendaftaranInput.value = generatedKodePendaftaran;
//   // Simpan kode pendaftaran ke localStorage
//   localStorage.setItem("kdpendaftaran", generatedKodePendaftaran);
// }

// Fungsi untuk menghasilkan kode pendaftaran
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
    randomNum = day + month + year + "00";
  }

  // Mendapatkan angka urutan dari angka acak
  var sequence = parseInt(randomNum.substr(-2));
  sequence += 1;

  // Menggabungkan semua bagian untuk membentuk kode pendaftaran
  var kodePendaftaran = day + month + year + sequence.toString().padStart(2, "0");

  // Simpan angka acak berurutan ke localStorage
  localStorage.setItem("randomNum", kodePendaftaran);

  // Cek keberadaan kode pendaftaran pada API
  var isCodeExists = await checkCodeExists(kodePendaftaran);
  if (isCodeExists) {
    // Jika kode pendaftaran sudah ada, generate kode pendaftaran baru
    return generateKodePendaftaran();
  }

  return kodePendaftaran;
}

// Fungsi untuk memeriksa keberadaan kode pendaftaran pada API
async function checkCodeExists(kodePendaftaran) {
  try {
    var response = await fetch("https://ws-dito.herokuapp.com/pendaftaran/" + kodePendaftaran);
    var data = await response.json();
    return data.exists;
  } catch (error) {
    console.error("Error checking code existence:", error);
    return false;
  }
}

// Mendapatkan elemen input kode pendaftaran
var kdpendaftaranInput = document.getElementById("kdpendaftaran");

// Cek apakah kode pendaftaran sudah ada di localStorage
var storedKodePendaftaran = localStorage.getItem("kdpendaftaran");
if (storedKodePendaftaran) {
  // Mendapatkan tanggal sekarang
  var currentDate = new Date();
  // Mendapatkan dua digit tahun terakhir
  var year = currentDate.getFullYear().toString().substr(-2);
  // Mendapatkan dua digit bulan
  var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  // Mendapatkan dua digit tanggal
  var day = currentDate.getDate().toString().padStart(2, "0");

  var lastGeneratedDate = storedKodePendaftaran.substr(0, 6);
  if (parseInt(lastGeneratedDate) === parseInt(day + month + year)) {
    // Jika kode pendaftaran terakhir telah dihasilkan hari ini, lanjutkan urutan
    var lastSequence = parseInt(storedKodePendaftaran.substr(-2));
    lastSequence += 1;

    // Menggabungkan semua bagian untuk membentuk kode pendaftaran baru
    var newKodePendaftaran = day + month + year + lastSequence.toString().padStart(2, "0");

    // Cek keberadaan kode pendaftaran baru pada API
    var isCodeExists = await checkCodeExists(newKodePendaftaran);
    if (isCodeExists) {
      // Jika kode pendaftaran baru sudah ada, generate kode pendaftaran baru lagi
      newKodePendaftaran = await generateKodePendaftaran();
    }

    kdpendaftaranInput.value = newKodePendaftaran;
    // Simpan kode pendaftaran baru ke localStorage
    localStorage.setItem("kdpendaftaran", newKodePendaftaran);
  } else {
    // Jika kode pendaftaran terakhir tidak dihasilkan hari ini, generate kode pendaftaran baru
    var generatedKodePendaftaran = await generateKodePendaftaran();
    kdpendaftaranInput.value = generatedKodePendaftaran;
    // Simpan kode pendaftaran ke localStorage
    localStorage.setItem("kdpendaftaran", generatedKodePendaftaran);
  }
} else {
  // Jika belum ada, generate kode pendaftaran baru
  var generatedKodePendaftaran = await generateKodePendaftaran();
  kdpendaftaranInput.value = generatedKodePendaftaran;
  // Simpan kode pendaftaran ke localStorage
  localStorage.setItem("kdpendaftaran", generatedKodePendaftaran);
}
