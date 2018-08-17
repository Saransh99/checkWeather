function getWeather(){
    let weatherAPIURL = "http://api.openweathermap.org/data/2.5/weather?q=";
    let city = document.getElementById('inputCity').value;
    let units = "&units=metric&";
    let apiKey = "APPID=d4fdfafcc8cb7e408d5b354c52a547d7";
    let fullPath = weatherAPIURL+city+units+apiKey;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             var myArr = JSON.parse(this.responseText);
            document.getElementById("result").innerHTML = `Temperature: ${myArr.main['temp']} Celsius`
    }
};
    xmlhttp.open("GET", fullPath, true);
    xmlhttp.send();
    
}