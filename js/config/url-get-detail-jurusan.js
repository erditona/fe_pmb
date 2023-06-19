//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const jurusanId = urlParams.get("jurusanId");

export let urlFetch = "https://ws-dito.herokuapp.com/jurusan/" + jurusanId;
