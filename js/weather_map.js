$(() => {
    // GLOBAL VARIABLES
    const map = initializeMap();
    const forecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const apiKey = OPEN_WEATHER_APPID;
    let currentMarker = null;


    // Call the function to extract city and state and fetch weather data
    document.getElementById('searchWeatherForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const locationInput = document.getElementById('location').value;
        getWeatherData(locationInput);
    });

    function getWeatherData(location) {
        let queryParams;
        if (typeof location === 'string') {
            queryParams = {q: location, appid: apiKey, units: 'imperial'};
        } else if (typeof location === 'object') {
            queryParams = {lat: location.latitude, lon: location.longitude, appid: apiKey, units: 'imperial'};
        } else {
            console.error('Invalid location format');
            return;
        }

        $.ajax({
            url: forecastApiUrl,
            method: 'GET',
            data: queryParams,
            success: function (forecastData) {
                displayForecastData(forecastData);

                if (currentMarker) {
                    currentMarker.remove();
                }

                const latitude = forecastData.city.coord.lat;
                const longitude = forecastData.city.coord.lon;
                currentMarker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

                map.flyTo({
                    center: [longitude, latitude],
                    essential: true,
                });
            },
            error: function (error) {
                console.error('Error:', error);
            },
        });
    }

// The function to display today's forecast card
    function displayTodayForecast(todayForecastData) {
        $('#today-forecast-card').empty();

        const description = todayForecastData.weather[0].description;
        const currentTemperature = todayForecastData.main.temp;
        const humidity = todayForecastData.main.humidity;
        const windSpeed = todayForecastData.wind.speed;

        $('#today-forecast-card').append(`
        <div class="card">
            <h1 class="weatherDate carti">Today's Forecast</h1>
            <p class="carti">Temperature: ${currentTemperature.toFixed(2)} °F</p>
            <p class="carti">Humidity: ${humidity.toFixed(2)} %</p>
            <p class="carti">Wind Speed: ${windSpeed.toFixed(1)} m/s</p>
            <p class="carti">${description}</p>
        </div>
    `);
    }

    function displayWeatherData(data) {
        const city = data.name;
        const country = data.sys.country;
        $('#locationName').text(`${city}, ${country}`);
    }

    function displayForecastData(forecastData) {
        // Assuming forecastData contains the weather forecast information
        $('#forecast-card-container').empty();
        const forecastByDate = {};

        for (const forecast of forecastData.list) {
            const date = forecast.dt_txt.split(' ')[0];
            if (!forecastByDate[date]) {
                forecastByDate[date] = [];
            }
            forecastByDate[date].push(forecast);
        }

        for (const date in forecastByDate) {
            const dateForecastData = forecastByDate[date];
            let totalMinTemperature = 0;
            let totalMaxTemperature = 0;
            let totalHumidity = 0;
            let totalWindSpeed = 0;
            for (const forecast of dateForecastData) {
                totalMinTemperature += forecast.main.temp_min;
                totalMaxTemperature += forecast.main.temp_max;
                totalHumidity += forecast.main.humidity;
                totalWindSpeed += forecast.wind.speed;
            }
            const averageMinTemperature = totalMinTemperature / dateForecastData.length;
            const averageMaxTemperature = totalMaxTemperature / dateForecastData.length;
            const averageHumidity = totalHumidity / dateForecastData.length;
            const averageWindSpeed = totalWindSpeed / dateForecastData.length;

            const parsedDate = new Date(date);
            const dayOfWeek = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(parsedDate);
            const dateWithoutYear = new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric'
            }).format(parsedDate);

            const description = dateForecastData[0].weather[0].description;

            $('#forecast-card-container').append(`
        <div class="card">
          <h1 class="weatherDate carti">${dayOfWeek} - ${dateWithoutYear}</h1>
          <p class="carti temp"> H:${averageMaxTemperature.toFixed(2)} °F / L:${averageMinTemperature.toFixed(2)} °F</p>
          <p class="carti">Humidity: ${averageHumidity.toFixed(2)} %</p>
          <p class="carti">Wind Speed: ${averageWindSpeed.toFixed(1)} m/s</p>
          <p class="carti"> ${description}</p>
        </div>
      `);
        }
    }

    // Assuming 'map' is your Mapbox map instance
    map.on('click', function (e) {
        const latitude = e.lngLat.lat;
        const longitude = e.lngLat.lng;
        getWeatherData({latitude, longitude});
    });

    // FUNCTIONS
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_API_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v11',
            zoom: 10,
            center: [-98.4916, 29.4252],
        };

        return new mapboxgl.Map(mapOptions);
    }

    // Function to load weather data for San Antonio, Texas when the page is ready
    function loadDefaultWeather() {
        const defaultLocation = "San Antonio, Texas";
        getWeatherData(defaultLocation);
    }

    // Call the function to load default weather when the page is ready
    loadDefaultWeather();

});
