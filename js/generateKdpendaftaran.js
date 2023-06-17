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
  // Jika angka acak belum ada, inisialisasi dengan 1
  if (!randomNum) {
    randomNum = 1;
  } else {
    // Jika angka acak sudah ada, tambahkan 1
    randomNum = parseInt(randomNum) + 1;
  }
  // Simpan angka acak berurutan ke localStorage
  localStorage.setItem("randomNum", randomNum);

  // Menggabungkan semua bagian untuk membentuk kode pendaftaran
  var kodePendaftaran = day + month + year + randomNum.toString().padStart(2, "0");
  return kodePendaftaran;
}

// Mendapatkan elemen input kode pendaftaran
var kdpendaftaranInput = document.getElementById("kdpendaftaran");
// Mengisi nilai input kode pendaftaran dengan kode yang dihasilkan
kdpendaftaranInput.value = generateKodePendaftaran();
