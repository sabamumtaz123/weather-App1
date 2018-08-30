
function initialize() {
    $(".form-control").keyup(function (event) {
        if (event.keyCode === 13) {
            $(".btn").click();
        }
    })
}



function getWeather() {
    document.querySelector(".weather-info").style.display = "block";
    const cityName = document.querySelector("input").value;
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b4397e351670510cacd5a62924137601&units=metric`,
        success: function (data) {
            console.log(data);
            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp > span").innerHTML = Math.round(data.main.temp);
            document.querySelector(".description").innerHTML = data.weather[0].main;
            document.querySelector(".min").innerHTML = Math.round(data.main.temp_min);
            document.querySelector(".max").innerHTML = Math.round(data.main.temp_max);

            let icon = data.weather[0].main;

            if (icon === 'Smoke') {
                document.querySelector(".main-icon").innerHTML = '<i class="wi wi-smoke"></i>';
                document.body.style.backgroundImage = "url('https://www.jeremybrasher.com/images/xl/Storm-ChimneysFLAT.jpg')";
            }
            else if (icon === 'Clouds') {
                document.querySelector(".main-icon").innerHTML = '<i class="wi wi-cloud"></i>';
                document.body.style.backgroundImage = "url('https://bash.news/files/15C742BC82004F6C.jpg')";
            }
            else if (icon === 'Rain') {
                document.querySelector(".main-icon").innerHTML = '<i class="wi wi-night-rain-wind"></i>';
                document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/ad/99/0c/ad990c716c1487af6e7d6f95cc38d937.jpg')";

            }
            else if (icon === 'Haze') {
                document.querySelector(".main-icon").innerHTML = '<i class="wi wi-day-haze"></i>';
                document.body.style.backgroundImage = "url('https://img3.goodfon.ru/wallpaper/big/8/7b/tuman-les-gory-doroga.jpg')";
            }
            else if (icon === 'Clear') {
                document.querySelector(".main-icon").innerHTML = '<i class="wi wi-night-clear"></i>';
                document.body.style.backgroundImage = "url('https://wallpaper-house.com/data/out/12/wallpaper2you_542327.jpg')";
            }
            else if (icon === 'Fog') {
                document.querySelector(".main-icon").innerHTML = '<i class="wi wi-night-fog"></i>';
                document.body.style.backgroundImage = "url('https://dexab.com/wp-content/uploads/2016/11/Beautiful-Foggy-Road-Landscape-Photography.jpg')";
            }
            else {
                document.querySelector(".main-icon").innerHTML = 'no-icon';
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    

}
