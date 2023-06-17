// Fungsi untuk menghasilkan kode pendaftaran
function generateKodePendaftaran() {
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
  return kodePendaftaran;
}

// Mendapatkan elemen input kode pendaftaran
var kdpendaftaranInput = document.getElementById("kdpendaftaran");

// Cek apakah kode pendaftaran sudah ada di localStorage
var storedKodePendaftaran = localStorage.getItem("kdpendaftaran");
if (storedKodePendaftaran) {
  kdpendaftaranInput.value = storedKodePendaftaran;
} else {
  // Jika belum ada, generate kode pendaftaran baru
  var generatedKodePendaftaran = generateKodePendaftaran();
  kdpendaftaranInput.value = generatedKodePendaftaran;
  // Simpan kode pendaftaran ke localStorage
  localStorage.setItem("kdpendaftaran", generatedKodePendaftaran);
}
