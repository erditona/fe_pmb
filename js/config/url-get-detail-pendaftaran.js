//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const pendaftaranId = urlParams.get("pendaftaranId");

export let urlFetch = "https://ws-dito.herokuapp.com/pendaftaran/" + pendaftaranId;
