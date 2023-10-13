localStorage.clear();

var searchBtn = document.getElementById("search-btn");
var cityInput = document.getElementById("city-input");
var weatherDashboard = document.getElementById("dashboard");
searchBtn.addEventListener("click", searchCity);
var forecastSection = document.getElementById("forecast-section");

function searchCity() {
    var cityName = cityInput.value
    searchWeather(cityName)
}
function searchWeather(cityName) {
    console.log(cityName);
    var apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=aab9ea777839e319813126c72df76177";
    fetch(apiurl)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentData) {
            console.log(currentData)
            weatherDashboard.innerHTML = `
        <h3>${currentData.name} (${dayjs.unix(currentData.dt).format("MM/DD/YYYY")}) <img src="https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png" alt=""></h3>
        <p>Temp: ${currentData.main.temp} °F </p>
        <p>Wind: ${currentData.wind.speed} mph</p>
        <p>Humidity: ${currentData.main.humidity} %</p>
        `
        })
    var apiurl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=aab9ea777839e319813126c72df76177";
    fetch(apiurl)
        .then(function (response) {
            return response.json()
        })
        .then(function (forecastData) {
            console.log(forecastData);
            var list = forecastData.list
            forecastSection.innerHTML=""
            for (let i = 3; i < list.length; i = i + 8) {

                console.log(list[i]);
                forecastSection.innerHTML+=`
                <div class="col-sm-2 mb-3 mb-sm-0">
                <div class="card bg-secondary text-white">
                    <div class="card-body">
                        <h5 class="card-title">${dayjs.unix(list[i].dt).format("MM/DD/YYYY")}</h5>
                        <p class="card-text"><img src="https://openweathermap.org/img/wn/10d@2x.png" /> </p>
                        <p>Temp: 70 °F </p>
                        <p>Wind: 8 mph</p>
                        <p>Humidity: 44 %</p>
                    </div>
                </div>
            </div>
                `
            }
        })
}