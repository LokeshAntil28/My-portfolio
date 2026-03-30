// BudgetTracker - app.js
let transactions = JSON.parse(localStorage.getItem('bt_transactions') || '[]');
let txnType = 'income';
let pieChart = null;
let barChart = null;

const CATEGORY_ICONS = {
  Salary: '💼', Freelance: '💻', Food: '🍔', Transport: '🚗',
  Shopping: '🛍️', Bills: '💡', Health: '🏥', Education: '📚',
  Entertainment: '🎬', Other: '📦'
};

// Set today's date as default
document.getElementById('txn-date').value = new Date().toISOString().split('T')[0];

function setType(type) {
  txnType = type;
  document.getElementById('btn-income').classList.toggle('active', type === 'income');
  document.getElementById('btn-expense').classList.toggle('active', type === 'expense');
}

function save() { localStorage.setItem('bt_transactions', JSON.stringify(transactions)); }

function addTransaction() {
  const desc = document.getElementById('desc').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const date = document.getElementById('txn-date').value;

  if (!desc) return alert('Please enter a description.');
  if (!amount || amount <= 0) return alert('Please enter a valid amount.');
  if (!date) return alert('Please select a date.');

  transactions.unshift({ id: Date.now(), desc, amount, category, type: txnType, date });
  save();
  renderAll();

  // Reset form
  document.getElementById('desc').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('txn-date').value = new Date().toISOString().split('T')[0];
}

function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  save();
  renderAll();
}

function clearAll() {
  if (!confirm('Are you sure you want to clear all transactions?')) return;
  transactions = [];
  save();
  renderAll();
}

function renderSummary() {
  const income  = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = income - expense;
  document.getElementById('total-income').textContent  = `₹${income.toFixed(2)}`;
  document.getElementById('total-expense').textContent = `₹${expense.toFixed(2)}`;
  const bal = document.getElementById('balance');
  bal.textContent = `₹${Math.abs(balance).toFixed(2)}${balance < 0 ? ' (deficit)' : ''}`;
}

function renderList() {
  const filter = document.getElementById('filter-type').value;
  const filtered = filter === 'all' ? transactions : transactions.filter(t => t.type === filter);
  const list = document.getElementById('txn-list');
  const empty = document.getElementById('empty-msg');

  if (filtered.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  list.innerHTML = filtered.map(t => `
    <div class="txn-item">
      <div class="txn-left">
        <div class="txn-icon ${t.type}">${CATEGORY_ICONS[t.category] || '📦'}</div>
        <div>
          <div class="txn-desc">${t.desc}</div>
          <div class="txn-meta">${t.category} · ${new Date(t.date).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })}</div>
        </div>
      </div>
      <div class="txn-right">
        <div class="txn-amount ${t.type}">${t.type === 'income' ? '+' : '-'}₹${t.amount.toFixed(2)}</div>
        <button class="del-btn" onclick="deleteTransaction(${t.id})">✕</button>
      </div>
    </div>
  `).join('');
}

function renderPieChart() {
  const expenses = transactions.filter(t => t.type === 'expense');
  const catTotals = {};
  expenses.forEach(t => { catTotals[t.category] = (catTotals[t.category] || 0) + t.amount; });
  const labels = Object.keys(catTotals);
  const data = Object.values(catTotals);
  const colors = ['#3182ce','#38a169','#e53e3e','#d69e2e','#805ad5','#dd6b20','#319795','#e53e3e','#553c9a','#2c7a7b'];

  const ctx = document.getElementById('pie-chart').getContext('2d');
  if (pieChart) pieChart.destroy();
  pieChart = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors.slice(0, labels.length), borderWidth: 2 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { font: { size: 12 } } } } }
  });
}

function renderBarChart() {
  const monthly = {};
  transactions.forEach(t => {
    const month = t.date.slice(0, 7);
    if (!monthly[month]) monthly[month] = { income: 0, expense: 0 };
    monthly[month][t.type] += t.amount;
  });
  const labels = Object.keys(monthly).sort();
  const ctx = document.getElementById('bar-chart').getContext('2d');
  if (barChart) barChart.destroy();
  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Income', data: labels.map(l => monthly[l].income), backgroundColor: '#38a169' },
        { label: 'Expense', data: labels.map(l => monthly[l].expense), backgroundColor: '#e53e3e' }
      ]
    },
    options: { responsive: true, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true } } }
  });
}

function switchChart(type, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (type === 'pie') {
    document.getElementById('pie-chart').style.display = 'block';
    document.getElementById('bar-chart').style.display = 'none';
    renderPieChart();
  } else {
    document.getElementById('pie-chart').style.display = 'none';
    document.getElementById('bar-chart').style.display = 'block';
    renderBarChart();
  }
}

function exportCSV() {
  if (transactions.length === 0) return alert('No transactions to export.');
  const header = 'Date,Description,Category,Type,Amount\n';
  const rows = transactions.map(t => `${t.date},"${t.desc}",${t.category},${t.type},${t.amount}`).join('\n');
  const blob = new Blob([header + rows], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `budget_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
}

function renderAll() {
  renderSummary();
  renderList();
  renderPieChart();
}

renderAll();
