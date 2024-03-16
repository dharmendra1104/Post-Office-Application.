let url = "https://jsonip.com"
let ipAddress = document.querySelector(".ip")
let btn = document.querySelector(".btn")

function fetcchdata(url) {
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.ip)
    // ipAddress.textContent = data.ip
    fetch(`https://ipapi.co/${data.ip}/json/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.postal);
      console.log(data);
      fetch(`https://api.postalpincode.in/pincode/${data.postal}`)
    })
  })
    .catch(error => {
      console.error('Error fetching IP address:', error);
    });
}
fetcchdata(url)



let timezone = new Date().toLocaleString('En-us', { timeZone: 'Asia/Shanghai' })
console.log(timezone);