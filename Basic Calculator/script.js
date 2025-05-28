let display = document.getElementById('display');
let memory = 0;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    let result = eval(display.value.replace('%', '/100'));
    if (!isFinite(result)) throw new Error();
    display.value = result;
  } catch {
    display.value = 'Undefined';
  }
}

// Memory functions
function memoryAdd() {
  try {
    memory += parseFloat(eval(display.value || 0));
  } catch {
    display.value = 'Error';
  }
}

function memorySubtract() {
  try {
    memory -= parseFloat(eval(display.value || 0));
  } catch {
    display.value = 'Error';
  }
}

function memoryRecall() {
  display.value += memory;
}

function memoryClear() {
  memory = 0;
}

// Optional: Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if ('0123456789+-*/.%'.includes(key)) {
    appendValue(key);
  } else if (key === 'Enter' || key === '=') {
    e.preventDefault();
    calculateResult();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
