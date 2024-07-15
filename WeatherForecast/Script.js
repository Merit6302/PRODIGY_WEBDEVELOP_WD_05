document.getElementById('locationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value.trim();
    if (location) {
        getWeather(location);
    }
});

function getWeather(location) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.querySelector('.weather-info');
    weatherInfo.innerHTML = `
        <p>Location: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
