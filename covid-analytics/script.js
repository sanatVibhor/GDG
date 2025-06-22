const countrySelect = document.getElementById('countrySelect');
const refreshBtn = document.getElementById('refresh');

const cases = document.getElementById('cases');
const recovered = document.getElementById('recovered');
const deaths = document.getElementById('deaths');

async function fetchCovidData(country) {
  try {
    const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
    const data = await res.json();

    cases.textContent = data.cases.toLocaleString();
    recovered.textContent = data.recovered.toLocaleString();
    deaths.textContent = data.deaths.toLocaleString();
  } catch (error) {
    console.error(error);
    alert('Error fetching data.');
  }
}

refreshBtn.addEventListener('click', () => {
  const selectedCountry = countrySelect.value;
  fetchCovidData(selectedCountry);
});

// Load initial data
fetchCovidData(countrySelect.value);
