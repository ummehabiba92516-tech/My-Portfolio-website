const adminTableBody = document.querySelector('#admin-table tbody');
const adminStatus = document.getElementById('admin-status');
const refreshButton = document.getElementById('refresh-button');

async function loadMessages() {
  adminStatus.textContent = 'Loading messages...';
  adminStatus.style.color = '#a3d6ff';

  try {
    const response = await fetch('/api/contacts');
    const result = await response.json();

    if (!response.ok) {
      adminStatus.textContent = result.message || 'Unable to load contact messages.';
      adminStatus.style.color = '#ffb3b3';
      return;
    }

    if (!Array.isArray(result) || result.length === 0) {
      adminStatus.textContent = 'No messages yet.';
      adminTableBody.innerHTML = '';
      return;
    }

    adminTableBody.innerHTML = result.map((message) => {
      const date = new Date(message.createdAt).toLocaleString();
      return `
        <tr>
          <td>${date}</td>
          <td>${escapeHTML(message.name)}</td>
          <td>${escapeHTML(message.email)}</td>
          <td>${escapeHTML(message.message)}</td>
        </tr>
      `;
    }).join('');

    adminStatus.textContent = `Loaded ${result.length} message${result.length === 1 ? '' : 's'}.`;
  } catch (error) {
    console.error('Admin load error:', error);
    adminStatus.textContent = 'Network error while loading messages.';
    adminStatus.style.color = '#ffb3b3';
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

refreshButton.addEventListener('click', loadMessages);
loadMessages();
