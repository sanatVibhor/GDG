const userPhoto = document.getElementById('user-photo');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const generateBtn = document.getElementById('generate');

async function fetchUser() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const user = data.results[0];

  userPhoto.src = user.picture.large;
  userName.textContent = `${user.name.first} ${user.name.last}`;
  userEmail.textContent = user.email;
}

generateBtn.addEventListener('click', fetchUser);

// Load one user on page load
fetchUser();
