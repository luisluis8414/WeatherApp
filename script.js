var store=document.querySelector("body");


let weather = {
    apiKey:"5d786c0d09325c0e759158e8de02f3fb",
    fetchWeather: function(city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +  city + "&appid=" + this.apiKey + "&units=metric")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data)
    {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity}= data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText="Wetter in " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText= description;
        document.querySelector(".temp").innerText=  temp + "°C";
        document.querySelector(".humidity").innerText="Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText="Wind speed: " + speed + "km/h";

    },
    search: function() {
        this.fetchWeather(document.querySelector(".searchBar").value);
        document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" + document.querySelector(".searchBar").value +")";  
        
    }
};
document.addEventListener('keypress', e => {
   if(e.key==='Enter')
   {
    weather.search();
    document.querySelector(".searchBar").value="";
   }
});

document
.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
    document.querySelector(".searchBar").value="";
});

weather.fetchWeather("Berlin");


// https://api.openweathermap.org/data/2.5/weather?q=London&appid=5d786c0d09325c0e759158e8de02f3fb