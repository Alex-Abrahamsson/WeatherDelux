//longGräsö = 60.418833
//LatGräsö = 18.446917

//LongGävle = 60.6749
//latGävle = 17.1413

//Api call
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let latitude = "lat=60.6749&";
let longitude = "lon=17.1413&";
let apiOptions = "units=metric&exclude=minutely,alerts&";
let apiKey = "appid=d1cad98fb876e640aae203693cb1c2d3";
let file = queryUrl +latitude +longitude +apiOptions+ apiKey;

//ikoner
let iconBase = "http://openweathermap.org/img/wn/";

fetch(file).then((response) => response.json()).then((data) =>
{
    console.log(data);
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?Gävle')"
    //Main window--
    document.getElementById("Description").innerHTML = data.current.weather[0].main;
    document.getElementById("TempNow").innerHTML = data.current.temp +"°C";
    document.getElementById("Windspeed").innerHTML = "Wind speed: " + data.current.wind_speed;
    document.getElementById("Humidity").innerHTML = "Humidity: " + data.current.humidity + " %";

    // ================== Get time ====================================
    let timeNow = new Date().getHours();
    let time1 = timeNow + 1;
    let time2 = timeNow + 2; 
    let time3 = timeNow + 3;             
    let time4 = timeNow + 4;
    let time5 = timeNow + 5;
    //To fix clock getting up to 24,25,26 and so on..........
    switch (timeNow) 
    {
      case 19:
        time5 = 0;
        break;
      case 20:
        time4 = "00";
        time5 = "01";
        break;
      case 21:
        time3 = "00";
        time4 = "01";
        time5 = "02";
        break;
      case 22:
        time2 = "00";
        time3 = "01";
        time4 = "02";
        time5 = "03";
        break;
      case 23:
        time2 = "00";
        time2 = "01";
        time3 = "02";
        time4 = "03";
        time5 = "04";
        break;
      default:
        break;
    }
    //========================================================================

    // ===================== Hourly weather ==================================
    document.getElementById("TimeHour1").innerHTML = time1;
    document.getElementById("Hourly-icon1").src = iconBase + data.hourly[1].weather[0].icon + ".png";
    document.getElementById("TempHour1").innerHTML = data.hourly[1].temp + "°";

    document.getElementById("TimeHour2").innerHTML = time2;
    document.getElementById("Hourly-icon2").src = iconBase + data.hourly[2].weather[0].icon + ".png";
    document.getElementById("TempHour2").innerHTML = data.hourly[2].temp + "°";

    document.getElementById("TimeHour3").innerHTML = time3;
    document.getElementById("Hourly-icon3").src = iconBase + data.hourly[3].weather[0].icon + ".png";
    document.getElementById("TempHour3").innerHTML = data.hourly[3].temp + "°";

    document.getElementById("TimeHour4").innerHTML = time4;
    document.getElementById("Hourly-icon4").src = iconBase + data.hourly[4].weather[0].icon + ".png";
    document.getElementById("TempHour4").innerHTML = data.hourly[4].temp + "°";

    document.getElementById("TimeHour5").innerHTML = time5;
    document.getElementById("Hourly-icon5").src = iconBase + data.hourly[5].weather[0].icon + ".png";
    document.getElementById("TempHour5").innerHTML = data.hourly[5].temp + "°";
    //==========================================================================

    // ========================== 5 Day forcast ================================
    document.getElementById("icon-day1").src = iconBase + data.daily[1].weather[0].icon + ".png";
    document.getElementById("forcast-mintemp-day1").innerHTML = "Min: " + data.daily[1].temp.min + "°";
    document.getElementById("forcast-maxtemp-day1").innerHTML = "Max: " +  data.daily[1].temp.max + "°";

    document.getElementById("icon-day2").src = iconBase + data.daily[2].weather[0].icon + ".png";
    document.getElementById("forcast-mintemp-day2").innerHTML = "Min: " + data.daily[2].temp.min + "°";
    document.getElementById("forcast-maxtemp-day2").innerHTML = "Max: " + data.daily[2].temp.max + "°";

    document.getElementById("icon-day3").src = iconBase + data.daily[3].weather[0].icon + ".png";
    document.getElementById("forcast-mintemp-day3").innerHTML = "Min: " +  data.daily[3].temp.min + "°";
    document.getElementById("forcast-maxtemp-day3").innerHTML = "Max: " +  data.daily[3].temp.max + "°";
    
    document.getElementById("icon-day4").src = iconBase + data.daily[4].weather[0].icon + ".png";
    document.getElementById("forcast-mintemp-day4").innerHTML = "Min: " +  data.daily[4].temp.min + "°";
    document.getElementById("forcast-maxtemp-day4").innerHTML = "Max: " +  data.daily[4].temp.max + "°";
    
    document.getElementById("icon-day5").src = iconBase + data.daily[5].weather[0].icon + ".png";
    document.getElementById("forcast-mintemp-day5").innerHTML = "Min: " +  data.daily[5].temp.min + "°";
    document.getElementById("forcast-maxtemp-day5").innerHTML = "Max: " +  data.daily[5].temp.max + "°";
})