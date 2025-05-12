let total = 0;
const list = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');

function addExpense() {
  const desc = document.getElementById('description').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  if (desc === '' || isNaN(amount)) {
    alert('Please enter a valid description and amount.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    ${desc} - $${amount.toFixed(2)}
    <button onclick="deleteExpense(this, ${amount})">X</button>
  `;

  list.appendChild(li);
  total += amount;
  updateTotal();

  // Clear inputs
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
}

function deleteExpense(button, amount) {
  button.parentElement.remove();
  total -= amount;
  updateTotal();
}

function updateTotal() {
  totalDisplay.textContent = total.toFixed(2);
}
