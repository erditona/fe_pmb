import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-pendaftaran.js";

function fetchData() {
  fetch("https://ws-dito.herokuapp.com/sekolah")
    .then((response) => response.json())
    .then((data) => {
      const jurusanDropdown = document.getElementById("jurusan");
      const sekolahDropdown = document.getElementById("asalsekolah");

      data.forEach((item) => {
        if (item.jenis === "jurusan") {
          const option = document.createElement("option");
          option.value = item._id;
          option.text = item.nama;
          jurusanDropdown.appendChild(option);
        } else if (item.jenis === "sekolah") {
          const option = document.createElement("option");
          option.value = item._id;
          option.text = item.nama;
          sekolahDropdown.appendChild(option);
        }
      });
    })
    .catch((error) => console.log(error));
}

fetchData();

function pushData() {
  const kdpendaftaranValue = parseInt(getValue("kdpendaftaran"));
  const ktpValue = parseInt(getValue("ktp"));
  const namaValue = getValue("nama");
  const phoneValue = getValue("phone_number");
  const alamatValue = getValue("alamat");
  const asalSekolahValue = getValue("asalsekolah");
  const jurusanValue = getValue("jurusan");
  const jalurValue = getValue("jalur");
  const alasanULBIValue = getValue("alulbi");
  const alasanJurusanValue = getValue("aljurusan");

  if (
    isNaN(kdpendaftaranValue) ||
    isNaN(ktpValue) ||
    namaValue === "" ||
    phoneValue === "" ||
    alamatValue === "" ||
    asalSekolahValue === "" ||
    jurusanValue === "" ||
    jalurValue === "" ||
    alasanULBIValue === "" ||
    alasanJurusanValue === ""
  ) {
    document.getElementById("status").textContent = "Data tidak boleh kosong!";
    return;
  }

  if (!/^\d{16}$/.test(ktpValue)) {
    document.getElementById("status").textContent = "Nomor KTP harus terdiri dari 16 digit angka.";
    return;
  }

  document.getElementById("status").textContent = "";

  const data = {
    kdpendaftaran: kdpendaftaranValue,
    ktp: ktpValue,
    nama: namaValue,
    phone_number: phoneValue,
    alamat: alamatValue,
    asalSekolah: asalSekolahValue,
    jurusan: jurusanValue,
    jalur: jalurValue,
    alasanULBI: alasanULBIValue,
    alasanJurusan: alasanJurusanValue,
  };

  console.log(data);
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
