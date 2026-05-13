const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  statusMessage.textContent = 'Sending your message...';

  const formData = new FormData(form);
  const payload = {
    name: formData.get('name').trim(),
    email: formData.get('email').trim(),
    message: formData.get('message').trim()
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!response.ok) {
      statusMessage.textContent = result.message || 'Unable to send your message at this time.';
      statusMessage.style.color = '#ffb3b3';
      return;
    }

    statusMessage.textContent = result.message;
    statusMessage.style.color = '#a3d6ff';
    form.reset();
  } catch (error) {
    console.error('Contact error:', error);
    statusMessage.textContent = 'Server error. Please try again later.';
    statusMessage.style.color = '#ffb3b3';
  }
});
