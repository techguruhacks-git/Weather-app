const apikey ="5395e97d22ecc16e42db0c02177dc165";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const Weatherimg = document.querySelector(".weather-image")
const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");


async function weatchfetch(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }

else{
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature-details").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector(".error").style.display = "none";

    if(data.weather[0].main == "Rain"){
        Weatherimg.src =  "weather-image.png";
    }
    else if(data.weather[0].main == "Clear"){
        Weatherimg.src = "sunny.png";
    }
    else if(data.weather[0].main == "Clouds"){
        Weatherimg.src = "download.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        Weatherimg.src = "drizzile.png";
    }
    else if(data.weather[0].main == "Mist"){
        Weatherimg.src = "mist.png";
    }
    else{
        Weatherimg.src = "weather-image.png";
    }
}
}
searchbtn.addEventListener("click", ()=>{
    weatchfetch(searchinput.value);
})
