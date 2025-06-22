const getFactBtn = document.getElementById('getFact');
const factText = document.getElementById('fact');

getFactBtn.addEventListener('click', async () => {
  try {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    factText.textContent = data.fact;
  } catch (error) {
    console.error(error);
    factText.textContent = 'Failed to load fact. Try again.';
  }
});
