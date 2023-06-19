//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const sekolahId = urlParams.get("sekolahId");

export let urlFetch = "https://ws-dito.herokuapp.com/sekolah/" + sekolahId;
