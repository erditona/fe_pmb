export function isiData(results) {
  const inputMapping = [
    { id: "kdpendaftar", path: "kdpendaftar" },
    // { id: "ktp", path: "biodata.ktp" },
    // { id: "namaBiodata", path: "biodata.nama" },
    // { id: "phoneNumber", path: "biodata.phone_number" },
    // { id: "alamatBiodata", path: "biodata.alamat" },
    // { id: "asalSekolahId", path: "asalsekolah._id" },
    // { id: "namaAsalSekolah", path: "asalsekolah.nama" },
    // { id: "phoneNumberAsalSekolah", path: "asalsekolah.phone_number" },
    // { id: "alamatAsalSekolah", path: "asalsekolah.alamat" },
    // { id: "kdjurusan", path: "jurusan.kdjurusan" },
    // { id: "nama", path: "jurusan.nama" },
    // { id: "jenjang", path: "jurusan.jenjang" },
    // { id: "jalur", path: "jalur" },
    // { id: "alulbi", path: "alulbi" },
    // { id: "aljurusan", path: "aljurusan" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

function getNestedValue(obj, path, index, property) {
  const value = path.split(".").reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  // console.log(`Value at path ${path}:`, value);

  if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
    return value[index][property];
  }

  return value;
}
