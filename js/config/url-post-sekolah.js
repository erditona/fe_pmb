export let urlPOST = "https://ws-dito.herokuapp.com/ins-sekolah";

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  // alert(result.message); //menampilkan response API pada alert
  let responseMessageElement = document.getElementById("status");
  if (responseMessageElement) {
    responseMessageElement.textContent = result.message;
  }
  // window.location.reload(); //reload halaman setelah klik ok pada alert
  // Wait for 3 seconds (adjust the duration as needed)
  const duration = 3000; // 3 seconds
  setTimeout(() => {
    window.location.reload(); // Reload the page after the delay
  }, duration);
}
