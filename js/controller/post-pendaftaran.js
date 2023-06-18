// Fetch data jurusan from the API for Pilih Jurusan
fetch("https://ws-dito.herokuapp.com/jurusan")
  .then((response) => response.json())
  .then((data) => {
    const jurusanDropdown = document.getElementById("jurusan");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.nama;
      jurusanDropdown.appendChild(option);
    });
  })
  .catch((error) => console.log(error));

// Fetch data sekolah from the API for Pilih sekolah
fetch("https://ws-dito.herokuapp.com/sekolah")
  .then((response) => response.json())
  .then((data) => {
    const asalSekolahDropdown = document.getElementById("asalsekolah");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.nama;
      asalSekolahDropdown.appendChild(option);
    });
  })
  .catch((error) => console.log(error));

import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-pendaftaran.js";

function pushData() {
  // Get the form values
  let kdpendaftaranValue = parseInt(getValue("kdpendaftaran"));
  let ktpValue = parseInt(getValue("ktp"));
  let namaValue = getValue("nama");
  let phoneValue = getValue("phone_number");
  let alamatValue = getValue("alamat");
  let asalSekolahValue = getValue("asalsekolah");
  let jurusanValue = getValue("jurusan");
  let jalurValue = getValue("jalur");
  let alasanULBIValue = getValue("alulbi");
  let alasanJurusanValue = getValue("aljurusan");

  // Perform form validation
  if (ktpValue === "" || namaValue === "" || phoneValue === "" || alamatValue === "" || asalSekolahValue === "" || jurusanValue === "" || jalurValue === "" || alasanULBIValue === "" || alasanJurusanValue === "") {
    document.getElementById("status").textContent = "Data tidak boleh kosong!";
    return;
  }

  // Validate KTP Number
  if (!/^\d{16}$/.test(ktpValue)) {
    document.getElementById("status").textContent = "Nomor KTP harus terdiri dari 16 digit angka.";
    return;
  }

  // Clear the status message if all fields are valid
  document.getElementById("status").textContent = "";

  let data = {
    kdpendaftar: kdpendaftaranValue,
    biodata: {
      ktp: ktpValue,
      nama: namaValue,
      phone_number: phoneValue,
      alamat: alamatValue,
    },
    asalsekolah: asalSekolahValue,
    jurusan: jurusanValue,
    jalur: jalurValue,
    alulbi: alasanULBIValue,
    aljurusan: alasanJurusanValue,
  };

  console.log(data);
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
