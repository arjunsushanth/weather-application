function getWeather(){
    let cityname=city.value;
    console.log(cityname);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).
    then(res=>res.json()).then(data=>displayWeather(data))

}
function displayWeather(data){
    let temperature=data.main.temp;
    let mintemp=data.main.temp_min;
    let maxtemp=data.main.temp_max;
    let humidity=data.main.humidity;
    let winDegree=data.main.winDegree;
    let feels_like=data.main.feels_like;
    let wind=data.wind.speed;
    let sunrise_time=data.sys.sunrise;
    let sunset_time=data.sys.sunset;
    id_location.innerHTML=`<h1 class="text-center">weather in ${data.name}</h1>`

    let htmldata=` <div class="card text-center">
    <div class="card-header">
    ${temperature}
    </div>
    <div class="card-body">
    <h5 class="card-title">temperature is ${temperature}</h5>
    <h5 class="card-title">min temp is ${mintemp}</h5>
    <h5 class="card-title">max temp is ${maxtemp}</h5>
    </div>
    <div class="card-footer text-muted">
    today
    </div>
    </div>`
id_temp.innerHTML=htmldata

// let humidity=data.main.humidity;
// let winDegree=data.main.wind.deg;
// let feelsLike=data.main.feels_like;

let humiditydata=` <div class="card text-center">
<div class="card-header">
humidity info
</div>
<div class="card-body">
<h5 class="card-title">humidity is ${humidity}</h5>
<h5 class="card-title">wind degree is ${winDegree}</h5>
<h5 class="card-title">feels like is ${feels_like}</h5>
<h5 class="card-title">humidity is ${humidity}</h5>
</div>
<div class="card-footer text-muted">
today
</div>
</div>`

id_humidity.innerHTML=humiditydata

let winddata=` <div class="card text-center">
<div class="card-header">
wind info
</div>
<div class="card-body">
<h5 class="card-title"> ${wind}</h5>
<h5 class="card-title">sunrise time is ${sunrise_time}</h5>
<h5 class="card-title">sunset time is ${sunset_time}</h5>
<h5 class="card-title">wind speed is ${wind}</h5>
</div>
<div class="card-footer text-muted">
today
</div>
</div>`

id_wind.innerHTML=winddata
}

