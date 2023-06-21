export function isiData(results) {
  const inputMapping = [
    { id: "kdpendaftaran", path: "kdpendaftar" },
    { id: "statuspendaftar", path: "statuspendaftar" },
    { id: "ktp", path: "biodata.ktp" },
    { id: "nama", path: "biodata.nama" },
    { id: "phone_number", path: "biodata.phone_number" },
    { id: "alamat", path: "biodata.alamat" },
    { id: "asalsekolah", path: "asalsekolah._id" },
    { id: "jurusan", path: "jurusan._id" },
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

function getNestedValue(obj, path, index, property) {
  const value = path.split(".").reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  // console.log(`Value at path ${path}:`, value);

  if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
    return value[index][property];
  }

  return value;
}

// export function isiData(results) {
//   const inputMapping = [
//     { id: "kdpendaftaran", path: "kdpendaftar" },
//     { id: "ktp", path: "biodata.ktp" },
//     { id: "nama", path: "biodata.nama" },
//     { id: "phone_number", path: "biodata.phone_number" },
//     { id: "alamat", path: "biodata.alamat" },
//     { id: "asalsekolah", path: "asalsekolah._id" },
//     { id: "jurusan", path: "jurusan._id" },
//     { id: "jalur", path: "jalur" },
//     { id: "alulbi", path: "alulbi" },
//     { id: "aljurusan", path: "aljurusan" },
//   ];

//   inputMapping.forEach(({ id, path }) => {
//     const inputElement = document.getElementById(id);
//     const value = getNestedValue(results, path);
//     inputElement.value = value;
//   });
// }

// function getNestedValue(obj, path) {
//   const keys = path.split(".");
//   let value = obj;

//   for (const key of keys) {
//     if (value && value.hasOwnProperty(key)) {
//       value = value[key];
//     } else {
//       value = "";
//       break;
//     }
//   }

//   return value;
// }
