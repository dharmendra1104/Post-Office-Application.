let url = "https://jsonip.com"
let ipAddress = document.querySelector(".ip")
function fetcchdata(url) {
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.ip)
    ipAddress.textContent = data.ip
  })
    .catch(error => {
      console.error('Error fetching IP address:', error);
    });
}
fetcchdata(url)
