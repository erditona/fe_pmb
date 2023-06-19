export function isiData(results) {
  const inputMapping = [
    { id: "kdpendaftar", path: "kdpendaftar" },
    { id: "ktp", path: "biodata.ktp" },
    { id: "namaBiodata", path: "biodata.nama" },
    { id: "phoneNumber", path: "biodata.phone_number" },
    { id: "alamatBiodata", path: "biodata.alamat" },
    { id: "asalSekolahId", path: "asalsekolah._id" },
    { id: "namaAsalSekolah", path: "asalsekolah.nama" },
    { id: "phoneNumberAsalSekolah", path: "asalsekolah.phone_number" },
    { id: "alamatAsalSekolah", path: "asalsekolah.alamat" },
    { id: "kdjurusan", path: "jurusan.kdjurusan" },
    { id: "nama", path: "jurusan.nama" },
    { id: "jenjang", path: "jurusan.jenjang" },
    { id: "jalur", path: "jalur" },
    { id: "alulbi", path: "alulbi" },
    { id: "aljurusan", path: "aljurusan" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

function getNestedValue(obj, path) {
  const nestedKeys = path.split(".");
  let value = obj;

  for (let key of nestedKeys) {
    if (value && value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      value = "";
      break;
    }
  }

  return value;
}
