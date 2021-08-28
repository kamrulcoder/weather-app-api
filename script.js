// fist  global document Declaire
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let cities = document.getElementById("cities");

let apiKey = "b628c93b759236554d4b8cf9a252289a";

//  form addEventListener function create

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let inputValue = input.value;







    //   fetch json data function create
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const {
                main,
                name,
                sys,
                weather
            } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

            let col = document.createElement("div");
            col.classList.add("col");
            col.setAttribute("id", "city");

            const markup =
                `
                <div class="weather-card one">
                    <div class="top">
                        <div class="wrapper">
                            <div class="mynav">
                                <a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
                                <a href="javascript:;"><span class="lnr lnr-cog"></span></a>
                            </div>
                            <img width="100px" src="${icon}">
                            <h1 class="heading">${weather[0].description}</h1>
                            <h3 class="location">${name},${sys.country}</h3>
                            <p class="temp">
                                <span class="temp-value">${Math.round(main.temp)}</span>
                                <span class="deg">0</span>
                                <a href="javascript:;"><span class="temp-type">C</span></a>
                            </p>
                        </div>
                    </div>
                 </div>
             `;
            col.innerHTML = markup
            cities.appendChild(col)
            input.value = '';


        }).catch(() => {
            msg.textContent = 'Please search for a valid city 😩';
            setTimeout(() => {
                msg.textContent = '';
            }, 5000);
            input.value = '';

        });










});