export function isiData(results) {
  const inputMapping = [
    { id: "kdpendaftar", path: "kdpendaftar" },
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

  inputMapping.forEach(({ id, path }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path);
    if (inputElement) {
      inputElement.value = value;
    } else {
      console.log(`Input element with id "${id}" not found.`);
    }
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
