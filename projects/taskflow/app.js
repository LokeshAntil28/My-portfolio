// TaskFlow - app.js
let tasks = JSON.parse(localStorage.getItem('tf_tasks') || '[]');
let editingId = null;
let draggedId = null;

function save() { localStorage.setItem('tf_tasks', JSON.stringify(tasks)); }

function openModal(id = null) {
  editingId = id;
  const modal = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = id ? 'Edit Task' : 'Add Task';
  if (id) {
    const t = tasks.find(t => t.id === id);
    document.getElementById('task-title').value = t.title;
    document.getElementById('task-desc').value = t.desc || '';
    document.getElementById('task-priority').value = t.priority;
    document.getElementById('task-due').value = t.due || '';
    document.getElementById('task-status').value = t.status;
  } else {
    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
    document.getElementById('task-priority').value = 'medium';
    document.getElementById('task-due').value = '';
    document.getElementById('task-status').value = 'todo';
  }
  modal.classList.add('open');
  setTimeout(() => document.getElementById('task-title').focus(), 100);
}

function closeModal() { document.getElementById('modal-overlay').classList.remove('open'); editingId = null; }

function saveTask() {
  const title = document.getElementById('task-title').value.trim();
  if (!title) return alert('Task title is required.');

  const task = {
    id: editingId || Date.now(),
    title,
    desc: document.getElementById('task-desc').value.trim(),
    priority: document.getElementById('task-priority').value,
    due: document.getElementById('task-due').value,
    status: document.getElementById('task-status').value,
    createdAt: editingId ? tasks.find(t => t.id === editingId).createdAt : new Date().toISOString()
  };

  if (editingId) {
    tasks = tasks.map(t => t.id === editingId ? task : t);
  } else {
    tasks.unshift(task);
  }
  save();
  renderAll();
  closeModal();
}

function deleteTask(id) {
  if (!confirm('Delete this task?')) return;
  tasks = tasks.filter(t => t.id !== id);
  save(); renderAll();
}

function moveTask(id, status) {
  tasks = tasks.map(t => t.id === id ? { ...t, status } : t);
  save(); renderAll();
}

// Drag and drop
function allowDrop(e) { e.preventDefault(); }

function drag(e, id) {
  draggedId = id;
  setTimeout(() => document.querySelector(`[data-id="${id}"]`)?.classList.add('dragging'), 0);
}

function drop(e, status) {
  e.preventDefault();
  document.querySelectorAll('.task-card').forEach(c => c.classList.remove('dragging'));
  if (draggedId) { moveTask(draggedId, status); draggedId = null; }
}

function isOverdue(due) {
  if (!due) return false;
  return new Date(due) < new Date(new Date().toDateString());
}

function formatDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

function renderAll() {
  const statuses = ['todo', 'inprogress', 'done'];
  statuses.forEach(status => {
    const cards = tasks.filter(t => t.status === status);
    document.getElementById(`count-${status}`).textContent = cards.length;
    document.getElementById(`cards-${status}`).innerHTML = cards.map(t => `
      <div class="task-card" data-id="${t.id}" draggable="true"
           ondragstart="drag(event,${t.id})">
        <div class="card-top">
          <div class="card-title">${t.title}</div>
          <div class="card-actions">
            <button class="card-btn" onclick="openModal(${t.id})" title="Edit">✏️</button>
            <button class="card-btn" onclick="deleteTask(${t.id})" title="Delete">🗑</button>
          </div>
        </div>
        ${t.desc ? `<div class="card-desc">${t.desc}</div>` : ''}
        <div class="card-footer">
          <span class="priority-badge priority-${t.priority}">${t.priority}</span>
          ${t.due ? `<span class="due-date ${isOverdue(t.due) && t.status !== 'done' ? 'overdue' : ''}">📅 ${formatDate(t.due)}</span>` : ''}
        </div>
      </div>
    `).join('');
  });
}

// Demo tasks on first load
if (tasks.length === 0) {
  tasks = [
    { id: 1, title: 'Set up project structure', desc: 'Initialize repo and folder layout', priority: 'high', due: '', status: 'done', createdAt: new Date().toISOString() },
    { id: 2, title: 'Design UI wireframes', desc: 'Sketch the main screens', priority: 'medium', due: '', status: 'inprogress', createdAt: new Date().toISOString() },
    { id: 3, title: 'Build login page', desc: 'Create auth form with validation', priority: 'high', due: '', status: 'todo', createdAt: new Date().toISOString() },
    { id: 4, title: 'Write unit tests', priority: 'low', due: '', status: 'todo', createdAt: new Date().toISOString() },
  ];
  save();
}

renderAll();
