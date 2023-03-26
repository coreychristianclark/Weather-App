let weather = {
    apiKey: "a0dbcb0d4363c843bc8ea65ec18118bc",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial&appid=" // Always break up URLs with " on either side. Then what whatever elements you want in between.
            + this.apiKey
            // ^ Using 'this' means you're referring to a given element within THIS code block.

        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
        // ^ This code is what's going on between JS and the API.
    },
        displayWeather: function(data) {
        const { name } = data;
            const { icon, description } = data.weather[0];
            // ^ These two elements are of the same category, so a comma can be used versus two separate variables. Also, unlike the rest, these were part of an array. This can be seen by the [] brackets.
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
            // ^ These values are found in the data sheet. By putting them into a variable, we can pull the value from the data.
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
            document.querySelector(".description").innerText = description;
            // ^ .innerText changes/publishes the text on the screen.
            document.querySelector(".temp").innerText = temp + "°F";
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
            document.querySelector(".weather").classList.remove("loading");
                // The classList.remove() will remove the given element IF IT IS THERE, and leave it alone if it is not there.

    },
        // ^ This comma separates codes of block that are within a main code block. You MUST use a comma to separate the blocks.
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
    // ^This block of code, when hit, directs its attention to what's in the search bar and searches it. ^
}

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
    // ^ Calling the main block "Weather" and a function associated with it search(). Just like with weather.FetchWeather().
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})
// ^ How to have the desired input able to be confirmed by "Enter" instead of clicking the search button.

weather.fetchWeather("Denver");
// ^ Makes it so the app doesn't see our raw numbers. It'll load up with accurate information on a given area until the search.

