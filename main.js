var startPosition  = "Gävle";
let favvo = [];



var searched = false;

let weatherData = {
  apiKey2: "941bac0f44203ce92ef6aa74c6455d8e",
  FetchWeather: function (city) 
  {
    
    startPosition = city;
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')";    // Hämtar en bild som är baserad på Staden vi kollar väder i
    document.getElementById("locationName").innerHTML = city;                                             // Visar namnet på den stad vi kollar väder i
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=" +this.apiKey2)
      .then((respons) => respons.json())
      .then((data2) => this.getInfo(data2));
  },
  getInfo(data2)                                                                                          // Hämtar lat och Long ur första Api'n
  {
    
    if(searched === true)
    {
      searchLatitude = "lat=" + data2.coord.lat + "&";
      searchLongitude = "lon=" + data2.coord.lon + "&";
      queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
      apiOptions = "units=metric&exclude=minutely,alerts&";
      apiKey = "appid=d1cad98fb876e640aae203693cb1c2d3";
      file = queryUrl + searchLatitude + searchLongitude + apiOptions + apiKey;
    }
    else if(searched === false)
    {
      latitude = "lat=" + document.getElementById("lat").innerHTML + "&";
      longitude = "lon=" + document.getElementById("long").innerHTML + "&";
      document.getElementById("locationName").innerHTML = startPosition;
      queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
      apiOptions = "units=metric&exclude=minutely,alerts&";
      apiKey = "appid=d1cad98fb876e640aae203693cb1c2d3";
      file = queryUrl + latitude + longitude + apiOptions + apiKey;
    }
    fetch(file)
      .then((response) => response.json())
      .then((data) => {
        //Main window--
        document.getElementById("Description").innerHTML = data.current.weather[0].main;
        document.getElementById("TempNow").innerHTML = Math.round(data.current.temp) + "°C";
        document.getElementById("Windspeed").innerHTML = "Wind speed: " + data.current.wind_speed;
        document.getElementById("Humidity").innerHTML = "Humidity: " + data.current.humidity + " %";

        // ================== Hämtar klockslag ====================================
        let timeNow = new Date().getHours();
        let time1 = timeNow + 1;
        let time2 = timeNow + 2;
        let time3 = timeNow + 3;
        let time4 = timeNow + 4;
        let time5 = timeNow + 5;
        //To fix clock getting up to 24,25,26 and so on..................
        switch (timeNow) {
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
        //============================================================================================================
        let iconBase = "http://openweathermap.org/img/wn/";
        // ========================================= Väder timme för timme ============================================
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
        //==============================================================================================================

        // ========================== Väder 5 dagar framåt =============================================================
        let weekday = new Date().getDay();
        switch (weekday) 
        {
          case 1:
            document.getElementById("day1").innerHTML = "Tuesday";
            document.getElementById("day2").innerHTML = "Wednesday";
            document.getElementById("day3").innerHTML = "Thursday";
            document.getElementById("day4").innerHTML = "Friday";
            document.getElementById("day5").innerHTML = "Saturday";
            break;
          case 2:
            document.getElementById("day1").innerHTML = "Wednesday";
            document.getElementById("day2").innerHTML = "Thursday";
            document.getElementById("day3").innerHTML = "Friday";
            document.getElementById("day4").innerHTML = "Saturday";
            document.getElementById("day5").innerHTML = "Sunday";
            break;
          case 3:
            document.getElementById("day1").innerHTML = "Thursday";
            document.getElementById("day2").innerHTML = "Friday";
            document.getElementById("day3").innerHTML = "Saturday";
            document.getElementById("day4").innerHTML = "Sunday";
            document.getElementById("day5").innerHTML = "Monday";
            break;
          case 4:
            document.getElementById("day1").innerHTML = "Friday";
            document.getElementById("day2").innerHTML = "Saturday";
            document.getElementById("day3").innerHTML = "Sunday";
            document.getElementById("day4").innerHTML = "Monday";
            document.getElementById("day5").innerHTML = "Tuesday";
            break;
          case 5:
            document.getElementById("day1").innerHTML = "Saturday";
            document.getElementById("day2").innerHTML = "Sunday";
            document.getElementById("day3").innerHTML = "Monday";
            document.getElementById("day4").innerHTML = "Tuesday";
            document.getElementById("day5").innerHTML = "Wednesday";
            break;
          case 6:
            document.getElementById("day1").innerHTML = "Sunday";
            document.getElementById("day2").innerHTML = "Monday";
            document.getElementById("day3").innerHTML = "Tuesday";
            document.getElementById("day4").innerHTML = "Wednesday";
            document.getElementById("day5").innerHTML = "Thursday";
            break;
          case 7:
            document.getElementById("day1").innerHTML = "Monday";
            document.getElementById("day2").innerHTML = "Tuesday";
            document.getElementById("day3").innerHTML = "Wednesday";
            document.getElementById("day4").innerHTML = "Thursday";
            document.getElementById("day5").innerHTML = "Friday";
            break;
          default:
            break;
        }
        document.getElementById("icon-day1").src = iconBase + data.daily[1].weather[0].icon + ".png";
        document.getElementById("forcast-mintemp-day1").innerHTML = "Min: " + Math.round(data.daily[1].temp.min) + "°";
        document.getElementById("forcast-maxtemp-day1").innerHTML = "Max: " + Math.round(data.daily[1].temp.max) + "°";

        document.getElementById("icon-day2").src = iconBase + data.daily[2].weather[0].icon + ".png";
        document.getElementById("forcast-mintemp-day2").innerHTML = "Min: " + Math.round(data.daily[2].temp.min) + "°";
        document.getElementById("forcast-maxtemp-day2").innerHTML = "Max: " + Math.round(data.daily[2].temp.max) + "°";

        document.getElementById("icon-day3").src = iconBase + data.daily[3].weather[0].icon + ".png";
        document.getElementById("forcast-mintemp-day3").innerHTML = "Min: " + Math.round(data.daily[3].temp.min) + "°";
        document.getElementById("forcast-maxtemp-day3").innerHTML = "Max: " + Math.round(data.daily[3].temp.max) + "°";

        document.getElementById("icon-day4").src = iconBase + data.daily[4].weather[0].icon + ".png";
        document.getElementById("forcast-mintemp-day4").innerHTML = "Min: " + Math.round(data.daily[4].temp.min) + "°";
        document.getElementById("forcast-maxtemp-day4").innerHTML = "Max: " + Math.round(data.daily[4].temp.max) + "°";

        document.getElementById("icon-day5").src = iconBase + data.daily[5].weather[0].icon + ".png";
        document.getElementById("forcast-mintemp-day5").innerHTML = "Min: " + Math.round(data.daily[5].temp.min) + "°";
        document.getElementById("forcast-maxtemp-day5").innerHTML = "Max: " + Math.round(data.daily[5].temp.max) + "°";
        //===============================================================================================================
      });
  },
  // Sök funktionen
  Search: function () 
  {
    this.FetchWeather(document.getElementById("search_box").value); // Hämtar värder ur <Input - text> med class="search-bar"
    searched = true;
  },
};

// =========================================================== Sök funktioner ======================================================
//Kör search funktionen om man trycker på "Sök" knappen
document.getElementById("search_button").addEventListener("click", function () 
{
  weatherData.Search();
  Clear();
});

//Se till att Search funktionen körs om man trycker Enter
document.getElementById("search_box").addEventListener("keyup", function (event) 
{
    if (event.key == "Enter")
    {
      weatherData.Search();
      Clear();
    }
  });

function Clear() 
{
  //Rensar all input i sökfältet efter varje sökning!
  document.getElementById("search_box").value = "";
}
// ==================================================================================================================================

//========================================= Sparar Favvo Platsen ====================================================================

function AddFavorite()
{
  if(localStorage.length == 0)
  {
    favvo = ["" + document.getElementById("locationName").innerHTML];
    localStorage.setItem("Favorites", JSON.stringify(favvo));
  }else
  {
    // Store the location in the favvo array
    favvo.push(document.getElementById("locationName").innerHTML);
    // Store in localstorage after JSON stringifying it
    localStorage.setItem("Favorites", JSON.stringify(favvo));
  }
  var favItem = document.createElement("Div");
  var FavlistaLängd = favvo.length - 1;
  favItem.setAttribute("id", FavlistaLängd);
  favItem.setAttribute("onclick", "FetchFavWeather(this.id)");
  favItem.innerHTML = document.getElementById("locationName").innerHTML;
  document.querySelector(".dropdown-content").appendChild(favItem);
}


function FetchFavWeather(clicked_id)
{
  alert(favvo[clicked_id]);
  weatherData.FetchWeather(favvo[clicked_id]);
};


function ClearFavorites() 
{
  localStorage.clear();
  alert("Du har raderat din sparade Favoritplats!");
  location.reload();
}
//===================================================================================================================================

// =============================== Visa klocka som uppdaterar sig ==================================================================
//#region 
var timeJustNow = document.getElementById("timeNow");

function time() 
{
  var date = new Date();
  var min = date.getMinutes();
  var hour = date.getHours();
  timeJustNow.textContent =
    ("0" + hour).substr(-2) +
    ":" +
    ("0" + min).substr(-2);
}
setInterval(time, 1000);

// Visa dagens datum
let todaysDate = new Date().toLocaleDateString()
document.getElementById("dateNow").innerHTML = todaysDate;
//#endregion


//==================================== Hämtar din position =========================================================================
var lat = document.getElementById("lat");
var long = document.getElementById("long");

function getLocation() 
{
  if (navigator.geolocation) 
  {
    navigator.geolocation.getCurrentPosition(getPosition);
  }

}
function getPosition(position) 
{
  lat.innerHTML = position.coords.latitude;
  long.innerHTML = position.coords.longitude;
}




// Retrieve the array from local storage
favvo = localStorage.getItem("Favorites");
// Parse it to something usable in js
favvo = JSON.parse(favvo);

for (let index = 0; index < favvo.length; index++) 
{
  var favItem = document.createElement("Div");
  favItem.setAttribute("class", "favDiv");
  favItem.setAttribute("id", index);
  favItem.setAttribute("onclick", "FetchFavWeather(this.id)");
  favItem.innerHTML = favvo[index];
  document.querySelector(".dropdown-content").appendChild(favItem);
}

getLocation();

weatherData.FetchWeather(startPosition);



