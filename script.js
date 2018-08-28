function initialize(){
    $(".form-control").keyup(function(event){
        if (event.keyCode === 13){
            $(".btn").click();
        }
    })
}



function getWeather() {
    document.querySelector(".weather-info").style.display = "block";
    const cityName = document.querySelector("input").value;
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b4397e351670510cacd5a62924137601&units=metric`,
        success: function(data) {
            console.log(data);

           
     

            let isNight = data.sys.sunset;

            if ( isNight === new Date() > data.sys.sunset && new Date() < data.sys.sunrise) {
                document.querySelector("body").style.backgroundColor = "black";
            } else {
                new Date();
                document.querySelector("body").style.backgroundColor = "black";
                document.querySelector("body").style.color = "white";
            }

            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp > span").innerHTML = Math.round(data.main.temp);
            document.querySelector(".description").innerHTML = data.weather[0].main;
            document.querySelector(".min").innerHTML = Math.round(data.main.temp_min);
            document.querySelector(".max").innerHTML = Math.round(data.main.temp_max);

             let icon = data.weather[0].main;

            if (icon=== 'Smoke'){
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-smoke"></i>';
            }
            else if(icon === 'Clouds'){
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-cloud"></i>';
            }
            else if(icon === 'Rain'){
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-night-rain-wind"></i>';
            }
            else if(icon === 'Haze'){
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-day-haze"></i>';
            }
            else if(icon === 'Clear'){
                 document.querySelector(".main-icon").innerHTML='<i class="wi wi-night-clear"></i>';
            }
            else if(icon === 'Fog'){
                 document.querySelector(".main-icon").innerHTML='<i class="wi wi-night-fog"></i>';
            }
            else{
                 document.querySelector(".main-icon").innerHTML='no-icon';
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
 
}
