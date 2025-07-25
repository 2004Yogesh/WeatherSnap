document.getElementById('weatherForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const location = document.getElementById('locationInput').value.trim();
  const apiKey = 'd2dc9792a8f54ae4b1373744252507';
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Location not found");

    const data = await response.json();

    document.getElementById('cityName').textContent = data.location.name + ', ' + data.location.country;
    document.getElementById('temperature').textContent = data.current.temp_c;
    document.getElementById('condition').textContent = data.current.condition.text;
    document.getElementById('weatherIcon').src = "https:" + data.current.condition.icon;

    document.getElementById('weatherResult').classList.remove('hidden');
  } catch (error) {
    alert("Error: " + error.message);
    document.getElementById('weatherResult').classList.add('hidden');
  }
});
