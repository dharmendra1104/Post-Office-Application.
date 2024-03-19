let url = "https://jsonip.com"
let ipAddress = document.querySelector(".ip")
let btn = document.querySelector(".btn")
let pincode = document.querySelector(".pincode")
let map = document.querySelector(".map")
let massage = document.querySelector(".massage")
// console.log(massage);

function fetcchdata(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.ip)
      fetch(`https://ipapi.co/${data.ip}/json/`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.postal);
          document.querySelector(".timezone").innerText = data.timezone
          document.querySelector(".ip").innerText = data.ip
          document.querySelector(".lat").innerText = data.latitude
          document.querySelector(".long").innerText = data.longitude
          document.querySelector(".city").innerText = data.city
          document.querySelector(".region").innerText = data.region
          document.querySelector(".organis").innerText = data.org
          document.querySelector(".hostname").innerText = data.country_name
          document.querySelector('iframe').src = `https://maps.google.com/maps?q=${data.latitude},${data.longitude}&z=15&output=embed`
          pincode.innerText = data.postal
          // console.log(data);
          fetch(`https://api.postalpincode.in/pincode/${data.postal}`)
            .then((resolve) => resolve.json())
            .then((detail) => {
              // console.log(detail[0].Message);
              // console.log(detail[0].PostOffice);
              document.querySelector(".massage").innerText = detail[0].Message
              let dataDetils = detail[0].PostOffice.map((item) => {
                return `
          <div class="item">
          <p>Name :<span class="name">${item.Name}</span></p>
          <p>Branch Type :<span class="branhName">${item.BranchType}</span></p>
          <p>Delivery Status :<span class="deliveStatus">${item.DeliveryStatus}</span></p>
          <p>District :<span class="district">${item.District}</span></p>
          <p>Division :<span class="division">${item.Division}</span></p>
          </div>  `
              })
              let information = document.querySelector(".information")
              let join = dataDetils.join('')
              information.innerHTML = ""
              information.innerHTML = join;



              let search = document.querySelector(".search");

              search.addEventListener('keyup', function () {
                let value = search.value.toLowerCase();
                let filteredPostOffices = detail[0].PostOffice.filter((item) => {
                  return item.Name.toLowerCase().includes(value);
                });

                let dataDetils = filteredPostOffices.map(function (item) {
                  return `
                            <div class="item">
                                <p>Name :<span class="name">${item.Name}</span></p>
                                <p>Branch Type :<span class="branhName">${item.BranchType}</span></p>
                                <p>Delivery Status :<span class="deliveStatus">${item.DeliveryStatus}</span></p>
                                <p>District :<span class="district">${item.District}</span></p>
                                <p>Division :<span class="division">${item.Division}</span></p>
                            </div>`;
                });

                let information = document.querySelector(".information");
                information.innerHTML = dataDetils.join('');
              });

            })
          // console.log(data.postal);
        })
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
    });
}
fetcchdata(url)

let timezone = new Date().toLocaleString('en-Us', { timeZone: 'Asia/Kolkata' });
let time = new Date(timezone).toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
// console.log(timezone);
document.querySelector(".datetime").innerText = timezone






