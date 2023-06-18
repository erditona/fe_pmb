// Fetch data from the API
fetch("https://ws-dito.herokuapp.com/jurusan")
  .then((response) => response.json())
  .then((data) => {
    const jurusanDropdown = document.getElementById("jurusan");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.text = item;
      jurusanDropdown.appendChild(option);
    });
  })
  .catch((error) => console.log(error));
