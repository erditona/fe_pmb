// Fetch data jurusan from the API for Pilih Jurusan
fetch("https://ws-dito.herokuapp.com/jurusan")
  .then((response) => response.json())
  .then((data) => {
    const jurusanDropdown = document.getElementById("jurusan");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.nama;
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
      option.value = item.nama;
      option.text = item.nama;
      asalSekolahDropdown.appendChild(option);
    });
  })
  .catch((error) => console.log(error));
