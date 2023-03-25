let weather = {
    apiKey: "a0dbcb0d4363c843bc8ea65ec18118bc",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial&appid="
            + this.apiKey

        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
        displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
            console.log(name, icon, description, temp, humidity, speed);
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src = "
            
    }
}


