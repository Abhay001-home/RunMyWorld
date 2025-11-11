// assets/js/script.js
const API_URL = 'http://localhost:5000/api';
const token = localStorage.getItem('authToken');

async function apiFetch(endpoint, options = {}) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers
    }
  });
  return res.json();
}

// ===== TASKS =====
async function loadTasks() {
  const tasks = await apiFetch('/tasks');
  // Your existing renderTasks() code here – just use `tasks` array
  renderTasks(tasks);
}

async function createTask(data) {
  const newTask = await apiFetch('/tasks', { method: 'POST', body: JSON.stringify(data) });
  loadTasks();
}

async function updateTask(id, data) {
  await apiFetch(`/tasks/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  loadTasks();
}

async function deleteTask(id) {
  await apiFetch(`/tasks/${id}`, { method: 'DELETE' });
  loadTasks();
}

// ===== DEVICES =====
async function loadDevices() {
  const devices = await apiFetch('/devices');
  renderDevices(devices);
}

// ===== USER PROFILE =====
async function loadProfile() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  document.querySelector('.user-name').textContent = user.name || 'User';
}

// Call on page load
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  loadDevices();
  loadProfile();
});