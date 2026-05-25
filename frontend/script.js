async function getWeather(cityName = null) {

    const loader = document.getElementById("loader");
    const errorDiv = document.getElementById("error");
    const weatherContent = document.getElementById("weatherContent");

    loader.classList.remove("hidden");

    weatherContent.innerHTML = "";
    errorDiv.innerHTML = "";

    try {

        const city = cityName || document.getElementById("cityInput").value;

        const response = await fetch(
            `http://localhost:8080/weather?city=${city}`
        );

        const data = await response.json();

        loader.classList.add("hidden");

        if(data.error){

            errorDiv.innerHTML = "City not found";
            return;
        }

        changeBackground(data.current.condition.text);

        let forecastHTML = "";

        data.forecast.forecastday.forEach(day => {

            forecastHTML += `

                <div class="forecast-card">

                    <h3>${day.date}</h3>

                    <img src="https:${day.day.condition.icon}">

                    <p>${day.day.avgtemp_c}°C</p>

                    <p>${day.day.condition.text}</p>

                </div>
            `;
        });

        weatherContent.innerHTML = `

            <div class="main-weather">

                <div>

                    <div class="city">
                        ${data.location.name}
                    </div>

                    <div class="temp">
                        ${data.current.temp_c}°C
                    </div>

                    <div class="condition">
                        ${data.current.condition.text}
                    </div>

                </div>

                <img
                    class="weather-icon"
                    src="https:${data.current.condition.icon}"
                >

            </div>

            <div class="details">

                <div class="card">
                    <h3>Humidity</h3>
                    <p>${data.current.humidity}%</p>
                </div>

                <div class="card">
                    <h3>Wind</h3>
                    <p>${data.current.wind_kph} kph</p>
                </div>

                <div class="card">
                    <h3>Feels Like</h3>
                    <p>${data.current.feelslike_c}°C</p>
                </div>

                <div class="card">
                    <h3>UV Index</h3>
                    <p>${data.current.uv}</p>
                </div>

                <div class="card">
                    <h3>Air Quality</h3>
                    <p>${data.current.air_quality.pm2_5.toFixed(2)}</p>
                </div>

                <div class="card">
                    <h3>Sunrise</h3>
                    <p>${data.forecast.forecastday[0].astro.sunrise}</p>
                </div>

                <div class="card">
                    <h3>Sunset</h3>
                    <p>${data.forecast.forecastday[0].astro.sunset}</p>
                </div>

            </div>

            <div class="forecast">

                <h2>5 Day Forecast</h2>

                <div class="forecast-grid">
                    ${forecastHTML}
                </div>

            </div>
        `;

    } catch(error){

        loader.classList.add("hidden");

        errorDiv.innerHTML = "Something went wrong";
    }
}

function changeBackground(condition){

    const body = document.body;

    condition = condition.toLowerCase();

    if(condition.includes("sunny")){

        body.style.background =
            "linear-gradient(135deg,#f59e0b,#f97316,#ea580c)";
    }

    else if(condition.includes("rain")){

        body.style.background =
            "linear-gradient(135deg,#0f172a,#1d4ed8,#38bdf8)";
    }

    else if(condition.includes("cloud")){

        body.style.background =
            "linear-gradient(135deg,#475569,#64748b,#94a3b8)";
    }

    else{

        body.style.background =
            "linear-gradient(135deg,#0f172a,#1e293b,#334155)";
    }
}

function getCurrentLocation(){

    navigator.geolocation.getCurrentPosition(async(position)=>{

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        getWeather(`${lat},${lon}`);
    });
}
