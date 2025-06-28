// 1. Get the form and all relevant elements
const form = document.querySelector('form');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const photoInput = document.getElementById('photo');

// 2. Create a place to preview data
const previewDiv = document.createElement('div');
previewDiv.style.marginTop = '20px';
document.querySelector('.form-container').appendChild(previewDiv);

// 3. Add form submit listener
form.addEventListener('submit', function(e) {
  e.preventDefault(); // stop default form action

  const fullname = fullnameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const photo = photoInput.files[0];

  // 4. Simple validations
  if (!fullname || !email || !password || !photo) {
    alert('Please fill in all fields.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  // 5. Create preview of the user info
  const reader = new FileReader();
  reader.onload = function(event) {
    previewDiv.innerHTML = `
      <h3>User Preview:</h3>
      <p><strong>Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <img src="${event.target.result}" alt="Profile Picture" style="width:100px;height:100px;border-radius:50%;border:1px solid #ccc;">
    `;
  };
  reader.readAsDataURL(photo);

  // 6. (Bonus) Simulate saving user info
  const user = {
    name: fullname,
    email: email,
    password,
  };
  console.log('User registered:', user);
});
