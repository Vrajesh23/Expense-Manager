// Add your JavaScript code for dynamic functionality here

let salary = 0;
let remainingSalary = 0;
let expenses = [];

const salaryManagementForm = document.getElementById('salary-management-form');
const expenseDivisionForm = document.getElementById('expense-division-form');
const resetButton = document.getElementById('reset-button');
const expenseList = document.getElementById('expense-list');
const remainingSalaryText = document.getElementById('remaining-salary');

salaryManagementForm.addEventListener('submit', function(event) {
  event.preventDefault();
  salary = parseFloat(document.getElementById('salary-input').value);
  remainingSalary = salary;
  remainingSalaryText.textContent = `$${remainingSalary.toFixed(2)}`;
  document.getElementById('salary-management').style.display = 'none';
  document.getElementById('expense-division').style.display = 'block';
});

expenseDivisionForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const expenseTitle = document.getElementById('expense-input').value;
  const expenseAmount = parseFloat(document.getElementById('amount-input').value);

  if (expenseAmount <= remainingSalary) {
    remainingSalary -= expenseAmount;
    remainingSalaryText.textContent = `$${remainingSalary.toFixed(2)}`;

    const expense = {
      title: expenseTitle,
      amount: expenseAmount
    };
    expenses.push(expense);

    const expenseItem = document.createElement('li');
    expenseItem.textContent = `${expenseTitle}: $${expenseAmount.toFixed(2)}`;
    expenseList.appendChild(expenseItem);

    document.getElementById('expense-input').value = '';
    document.getElementById('amount-input').value = '';

    if (remainingSalary === 0) {
      document.getElementById('expense-division-form').style.display = 'none';
      document.getElementById('fully-utilized').style.display = 'block';
    } else {
      document.getElementById('expense-input').focus();
    }
  } else {
    alert('Expense amount exceeds remaining salary. Please enter a lower amount.');
  }
});

resetButton.addEventListener('click', function(event) {
  event.preventDefault();
  salary = 0;
  remainingSalary = 0;
  expenses = [];
  remainingSalaryText.textContent = `$${remainingSalary.toFixed(2)}`;
  expenseList.innerHTML = '';
  document.getElementById('salary-management').style.display = 'block';
  document.getElementById('expense-division').style.display = 'none';
  document.getElementById('expense-division-form').style.display = 'block';
  document.getElementById('fully-utilized').style.display = 'none';
  document.getElementById('salary-input').value = '';
  document.getElementById('expense-input').value = '';
  document.getElementById('amount-input').value = '';
});
