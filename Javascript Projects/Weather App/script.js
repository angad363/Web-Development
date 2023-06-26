const apiKey = "6a091223d3555b8e642170384c3e7081";
const apiURL = "https://api.openweathermap.org/data/2.5/units=metric&q=";

const searchBox = document.querySelector("search input");
const searchBtn = document.querySelector("search button");
const weatherIcon = document.querySelector(".weather-icon");

if(response.status == 404){
    document.querySelector(".error").computedStyleMap.display = "block";
    document.querySelector(".error").computedStyleMap.display = "none";
}
else{
    async function checkWeather(city){
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        var data = await response.json;
    
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/clouds.png";
        }
    
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Images/clear.png";
        }
    
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Images/rain.png";
        }
    
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Images/drizzle.png";
        }
    
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Images/mist.png";
        }
    
        document.querySelector(".weather").computedStyleMap.display = "block";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

