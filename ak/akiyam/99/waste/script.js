// Handle Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const location = document.getElementById('location').value;

  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, location }),
  });

  const result = await response.json();
  alert(result.message);
});

// Handle Message Form Submission
document.getElementById('messageForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const message = document.getElementById('messageInput').value;

  await fetch('http://localhost:3000/message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  document.getElementById('messageInput').value = '';
});
