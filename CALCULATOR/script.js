const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
      display.innerText = '0';
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput || '0';
    } else if (value === '=') {
      try {
        const result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
      } catch {
        display.innerText = 'Error';
        currentInput = '';
      }
    } else{
        currentInput += value;
        display.innerHTML=currentInput;
    }
  });
});
