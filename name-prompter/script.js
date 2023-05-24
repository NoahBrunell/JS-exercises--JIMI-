const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');
const age = localStorage.getItem('age');

if (firstName && lastName && age) {
  displayInfo(firstName, lastName, age);
} else {
  promptForInfo();
}

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearInfo);

function promptForInfo() {
  const firstName = prompt('What is your first name?');
  const lastName = prompt('What is your last name?');
  const age = prompt('What is your age?');

  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('age', age);

  displayInfo(firstName, lastName, age);
}

function displayInfo(firstName, lastName, age) {
  const infoDiv = document.getElementById('info');
  infoDiv.textContent = `Name: ${firstName} ${lastName}, Age: ${age}`;
}

function clearInfo() {
  localStorage.clear();
  location.reload();
}
