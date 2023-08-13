// Get HTML elements
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const transactionsList = document.getElementById('transactions');
const balanceElement = document.getElementById('balance');

// Create an array to store transactions
let transactions = [];

// Function to add a new transaction
function addTransaction() {
 const description = descriptionInput.value;
 const amount = parseFloat(amountInput.value);
 const type = typeInput.value;

 if (description && amount) {
 const transaction = {
 description: description,
 amount: amount,
 type: type
 };
 transactions.push(transaction);

 // Clear input fields
 descriptionInput.value = '';
 amountInput.value = '';

 // Update transactions list
 updateTransactionsList();

 // Calculate and display balance
 calculateBalance();
 }
}

// Function to update transactions list
function updateTransactionsList() {
 transactionsList.innerHTML = '';
 transactions.forEach(transaction => {
 const listItem = document.createElement('li');
 listItem.textContent = `${transaction.description} - $${transaction.amount}`;
 listItem.classList.add(transaction.type);
 transactionsList.appendChild(listItem);
 });
}

// Function to calculate and display the balance
function calculateBalance() {
 let total = 0;
 transactions.forEach(transaction => {
 if (transaction.type === 'income') {
 total += transaction.amount;
 } else if (transaction.type === 'expense') {
 total -= transaction.amount;
 }
 });
 balanceElement.textContent = `$${total}`;
}