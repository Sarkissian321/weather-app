localStorage.clear();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=ab9ea777839e319813126c72df76177";
var searchBtn = document.getElementById("search-btn");
var cityInput = document.getElementById("city-input");
var weatherDashboard = document.getElementById("dashboard");
searchBtn.addEventListener("click", searchCity);

function searchCity() {
    
}