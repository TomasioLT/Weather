var latitude;
var longitude;
var fullCords;
window.onload = function(){
    Interval = setInterval(currentTime,1);
    calculator();
    weather.fetchWeatherCurrent('klaipeda');

    document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
    
  });
  document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }});
    document.querySelector(".cardWeek")
    .addEventListener("click", function(){
        weather.dipslayWeatherWeek();
    })
}

window.addEventListener('keydown', e =>{
    switch(e.keyCode){
        case 97:
            var buttonX = document.getElementById("one");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 98:
            var buttonX = document.getElementById("two");
            buttonX.style.backgroundColor = "rgb(223,223,223)"
            ;buttonX.style.transition = "0.15s";
            break;
        case 99:
            var buttonX = document.getElementById("three");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 100:
            var buttonX = document.getElementById("four");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 101:
            var buttonX = document.getElementById("five");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 102:
            var buttonX = document.getElementById("six");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 103:
            var buttonX = document.getElementById("seven");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 104:
            var buttonX = document.getElementById("eight");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 105:
            var buttonX = document.getElementById("nine");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 110:
            var buttonX = document.getElementById("point");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 107:
            var buttonX = document.getElementById("plus");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 109:
            var buttonX = document.getElementById("minus");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 106:
            var buttonX = document.getElementById("multiply");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 111:
            var buttonX = document.getElementById("divide");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 96:
            var buttonX = document.getElementById("zero");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
        case 13:
            var buttonX = document.getElementById("equal");
            buttonX.style.backgroundColor = "rgb(223,223,223)";
            buttonX.style.transition = "0.15s";
            break;
    }
})

window.addEventListener('keyup', e =>{
    console.log(e);
    switch(e.keyCode){
        case 97:
            var buttonX = document.getElementById("one");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 98:
            var buttonX = document.getElementById("two");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 99:
            var buttonX = document.getElementById("three");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 100:
            var buttonX = document.getElementById("four");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 101:
            var buttonX = document.getElementById("five");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 102:
            var buttonX = document.getElementById("six");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 103:
            var buttonX = document.getElementById("seven");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 104:
            var buttonX = document.getElementById("eight");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 105:
            var buttonX = document.getElementById("nine");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 110:
            var buttonX = document.getElementById("point");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 107:
            var buttonX = document.getElementById("plus");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 109:
            var buttonX = document.getElementById("minus");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 106:
            var buttonX = document.getElementById("multiply");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 111:
            var buttonX = document.getElementById("divide");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 96:
            var buttonX = document.getElementById("zero");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 13:
            var buttonX = document.getElementById("equal");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
        case 8:
            var buttonX = document.getElementById("clear");
            buttonX.click();
            buttonX.style.backgroundColor = "rgb(239, 239, 239)";buttonX.style.transition = "0.2s";
            break;
    }
});

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function currentTime(){
    const date = new Date();
    var dayWeek = date.getDay();
    var day = date.getDate();
    if(day<10){
        day = "0"+day;
    }
    var month = date.getMonth()+1;
    if(month<10){
        month = "0"+month;
    }
    var year = date.getFullYear();
    var hour = date.getHours();
    if(hour <10){
        hour = "0"+hour;
    }
    var minute = date.getMinutes();
    if(minute<10){
        minute = "0"+minute;
    }
    var seconds = date.getSeconds();
    if(seconds<10){
        seconds = "0"+seconds;
    }
    var miliSeconds = date.getMilliseconds();

    //Interval = setInterval(timer,10);


    miliSeconds++;
    if(miliSeconds >1000){
        seconds++;
        miliSeconds = 0;
        document.getElementById("timer").innerHTML = fullYear;
    }
    else{
        document.getElementById("timer").innerHTML = fullYear;
    }


    var fullYear = year + "-" + month+"-"+day+" "+hour+":"+minute+":"+seconds;
    document.getElementById("timer").innerHTML = fullYear;
    var today = document.getElementById("weatherDay");
    
}

function calculator(){
    var number = "";
    var symbolCount = 0;
    var pointCount = 0;
    var screenBox = document.getElementById("input");
    

    zero.onclick = function(){
        
        const screenNumber = screenBox.innerHTML.split('');
        if(screenNumber[0]=='.' || screenNumber[1]=='.'){
            screenBox.innerHTML += 0;
            number += "0";
        }
        else if(screenNumber[0]=='0'){
            screenBox.innerHTML += '';
            number += '';
        }
        
        else{
            screenBox.innerHTML += 0;
            number += "0";
        }
        console.log(screenNumber.length);
    }

    point.onclick = function(){
        const screenNumber = screenBox.innerHTML.split('');
        if(screenNumber[0]=='0'){
            screenBox.innerHTML += ".";
            number += ".";
        }
        else if(pointCount == 0){
            screenBox.innerHTML += ".";
            number += ".";
        }
        pointCount++;
    }

    
    plus.onclick = function(){
        const screenNumber = screenBox.innerHTML.split('');
        if(symbolCount == 0){
            screenBox.innerHTML += "+";
            number += "+";
            symbolCount++;
        }
        
    }
    minus.onclick = function(){
        const screenNumber = screenBox.innerHTML.split('');
        if(symbolCount == 0){
            screenBox.innerHTML += "-";
            number += "-";
            symbolCount++;
        }
    }
    multiply.onclick = function(){
        const screenNumber = screenBox.innerHTML.split('');
        if(symbolCount == 0){
            screenBox.innerHTML += "&times";
            number += "*";
            symbolCount++;
        }
    }
    divide.onclick = function(){
        const screenNumber = screenBox.innerHTML.split('');
        if(symbolCount == 0){
            screenBox.innerHTML += "&divide";
            number += "/";
            symbolCount++;
        }

    }

    clear.onclick = function(){
        firstZero();
        result = 0;
        number = "";
        screenBox.innerHTML = "0";
        symbolCount = 0;
        pointCount = 0;
    }
    one.onclick = function(){
        firstZero();
        screenBox.innerHTML += 1;
        number += "1";
    }
   
    
    two.onclick = function(){
        firstZero();
        screenBox.innerHTML += 2;
        number += "2";
    }
    three.onclick = function(){
        firstZero();
        screenBox.innerHTML += 3;
        number += "3";
        

    }
    four.onclick = function(){
        firstZero();
        screenBox.innerHTML += 4;
        number += "4";
    }
    five.onclick = function(){
        firstZero();
        screenBox.innerHTML += 5;
        number += "5";
    }
    six.onclick = function(){
        firstZero();
        screenBox.innerHTML += 6;
        number += "6";
    }
    seven.onclick = function(){
        firstZero();
        screenBox.innerHTML += 7;
        number += "7";
    }
    eight.onclick = function(){
        firstZero();
        screenBox.innerHTML += 8;
        number += "8";
    }
    nine.onclick = function(){
        firstZero();
        screenBox.innerHTML += 9;
        number += "9";
    }
    function firstZero(){
        const screenNumber = screenBox.innerHTML.split('');
        if(screenNumber[0]=='0'){
            screenBox.innerHTML = '';
            number = "";
        }
    }
    
    var result;
    equal.onclick = function(){
        symbolCount = 0;
        pointCount = 0;
        try{
            var lastOperationPlus = false;
            var lastOperationMinus = false;
            var lastOperationMultiply = false;
            var lastOperationDivide = false;


            var screenNumberPlus = number.split('+');
            var screenNumberMinus = number.split('-');
            var screenNumberMultiply = number.split('*');
            var screenNumberDivide = number.split('/');
            var screenNumber = number.split();

            if(screenNumberPlus.length > 1){
                number = parseFloat(screenNumberPlus[0]) + parseFloat(screenNumberPlus[1]);
                screenBox.innerHTML = number;
    
                lastOperationPlus = true;
                lastOperationMinus = false;
                lastOperationMultiply = false;
                lastOperationDivide = false;
            }
    
            else if(screenNumberMinus.length > 1){
                number = parseFloat(screenNumberMinus[0]) - parseFloat(screenNumberMinus[1]);
                screenBox.innerHTML = number;
    
                lastOperationPlus = false;
                lastOperationMinus = true;
                lastOperationMultiply = false;
                lastOperationDivide = false;
            }
            else if(screenNumberMultiply.length > 1){
                number = parseFloat(screenNumberMultiply[0]) * parseFloat(screenNumberMultiply[1]);
                screenBox.innerHTML = number;
    
                lastOperationPlus = false;
                lastOperationMinus = false;
                lastOperationMultiply = true;
                lastOperationDivide = false;
            }
            else if(screenNumberDivide.length > 1){
                if(parseFloat(screenNumberDivide[1])==0){
                    number = "ZERO ERROR!";
                }
                else{
                    number = parseFloat(screenNumberDivide[0] / parseFloat(screenNumberDivide[1]));
                }
                screenBox.innerHTML = number;
    
                lastOperationPlus = false;
                lastOperationMinus = false;
                lastOperationMultiply = false;
                lastOperationDivide = true;
            }
            else if(screenNumber.length ==1){
                if(screenBox.innerHTML =="0"){
                    screenBox.innerHTML = "0";
                }
            }
            else{
                if(lastOperationPlus == true){
                    number += number;
                    screenBox.innerHTML = number;
                }
                else if(lastOperationMinus == true){
                    number -= number;
                    screenBox.innerHTML = number;
                }
                else if(lastOperationMultiply == true){
                    number *= number;
                    screenBox.innerHTML = number;
                }
                else if(lastOperationDivide = true){
                    number /= number;
                    screenBox.innerHTML = number;
                }
            }
        }
        catch(err){
            console.log(err.message);
        }
    }
}


let weather = {
  apiKey: "460e80304c8c9d336945a7d763171956",
  fetchWeatherCurrent: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&lang=lt&appid=" +
        this.apiKey
        /*date range: &cnt=7 */
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  fetchWeatherWeek: function(cords){
    fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat="
        +latitude+"&lon="+longitude+
        "&units=metric&lang=lt&appid="+this.apiKey
    )
        .then((response) => response.json())
        .then((data) => this.displayWeatherWeek(data));
  },
  dipslayWeatherWeek: function(data){
      console.log(data);
      console.log("Savaitine prognoze!!!!")




  },
  displayWeather: function (data) {
    console.log(data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like} = data.main;
    const { speed,deg } = data.wind;
    

    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    var myDateSunrise = new Date(sunrise *1000);
    var myDateSunriseHour = myDateSunrise.getHours();
    if(myDateSunriseHour<10){
      myDateSunriseHour = "0"+myDateSunriseHour;
    }
    var myDateSunriseMinutes = myDateSunrise.getMinutes();
    if(myDateSunriseMinutes<10){
      myDateSunriseMinutes = "0"+myDateSunriseMinutes;
    }
    var myDateSunset = new Date(sunset *1000);
    var myDateSunsetHour = myDateSunset.getHours();
    if(myDateSunsetHour<10){
      myDateSunsetHour = "0"+myDateSunsetHour;
    }
    var myDateSunsetMinutes = myDateSunset.getMinutes();
    if(myDateSunsetMinutes<10){
      myDateSunsetMinutes = "0"+myDateSunsetMinutes;
    }
    var dienosIlgumas = sunset - sunrise;
    console.log("Dienosilgumas: "+(myDateSunset-myDateSunrise))
    dienosIlgumas = new Date(dienosIlgumas *1000);
    var dienosIlgumasHour = dienosIlgumas.getHours()-3;
    if(dienosIlgumasHour<10){
      dienosIlgumasHour = "0"+dienosIlgumasHour;
    }
    var dienosIlgumasMinutes = dienosIlgumas.getMinutes();
    if(dienosIlgumasMinutes<10){
      dienosIlgumasMinutes = "0"+dienosIlgumasMinutes;
    }
    var dienosIlgumasX = dienosIlgumasHour+":"+dienosIlgumasMinutes;
    console.log("dienos ilgumas:" + dienosIlgumasX);
    
    var windDirection= "";
    if(deg==0){
      windDirection = "Nėra vėjo";
    }
    else if(deg>0 && deg<45){
      windDirection = "Šiaurės"
    }
    
    else if(deg>45 && deg<90){
      windDirection = "Šiaurės-Rytų"
    }
    else if(deg>90 && deg<135){
      windDirection = "Rytų"
    }
    else if(deg>135 && deg<180){
      windDirection = "Pietryčių"
    }
    else if(deg>180 && deg<235){
      windDirection = "Pietų"
    }
    else if(deg>235 && deg<270){
      windDirection = "Pietvakarių"
    }
    else if(deg>235 && deg<270){
      windDirection = "Vakarų"
    }
    else{
      windDirection = "Šiaurės-Vakarų"
    }
    
    
    console.log("Vejo kryptis: "+deg)
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    document.querySelector(".weather").classList.remove("loading");
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".temp").innerText = Math.round(temp) + "°C";
    document.querySelector(".city").innerText = "Orai " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".aprasymas").innerHTML = description;
    document.querySelector(".humidity").innerText ="Oro dregnumas "+
      humidity + "% ";
    document.querySelector(".wind").innerText =
      "Vejo greitis: " + speed + " m/s";
    document.querySelector(".sunrise").innerText = "Sauletekis: " + myDateSunriseHour+":"+myDateSunriseMinutes;
    document.querySelector(".sunset").innerText = "Saulelydis: " + myDateSunsetHour+":"+myDateSunsetMinutes;
    document.querySelector(".dayLong").innerText = "Dienos ilgumas: " + dienosIlgumasX;
    document.querySelector(".feels-like").innerText ="Jutimine temperatura: "+Math.round(feels_like)+"°C";
    document.querySelector(".vejo-kryptis").innerText ="Vejo kryptis: "+windDirection;
    latitude = data.coord.lat;
    longitude = data.coord.lon;
    fullCords = latitude+", "+longitude;
  },


  search: function () {
    this.fetchWeatherCurrent(document.querySelector(".search-bar").value);
  },

  windDirection: function(){

  },


};




