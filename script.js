let weather = {
    apiKey: "a0dbcb0d4363c843bc8ea65ec18118bc",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&appid&units=imperial&appid="
            + this.apiKey
        ).then((response) => response.json())
            .then((data) => console.log(data));
    }
displayWeather: function (data) {

    }

}