const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

let count = Number(localStorage.getItem('repCount')) || 0;

function updateDisplay() {
  counterDisplay.textContent = count;
  localStorage.setItem('repCount', count);
}

increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  if (count > 0) count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

updateDisplay(); // initialize on load
