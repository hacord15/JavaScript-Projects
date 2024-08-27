const apiKey ="b33d0cfae481b9ebc77010e1f084c097";
        const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

        const searchBox =document.querySelector(".search input");
        const searchBtn =document.querySelector(".search button");
        const weatherIcon =document.querySelector(".weather-icon")


        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();

            console.log(data); //data is accessible here 
        
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"Km/h";
       
        if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "weather-app-img/images/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "weather-app-img/images/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "weather-app-img/images/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "weather-app-img/images/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "weather-app-img/images/mist.png";
            } else {
                weatherIcon.src = "weather-app-img/images/default.png"; // Fallback image
            }
        }





searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
