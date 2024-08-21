const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

document.getElementById('addBtn').addEventListener('click', () => {
   result.textContent = `Result: ${parseFloat(num1.value) + parseFloat(num2.value)}`;
});

document.getElementById('subBtn').addEventListener('click', () => {
    result.textContent = `Result: ${parseFloat(num1.value) - parseFloat(num2.value)}`;
});

document.getElementById('mulBtn').addEventListener('click', () => {
    result.textContent = `Result: ${parseFloat(num1.value) * parseFloat(num2.value)}`;
});

document.getElementById('divBtn').addEventListener('click', () => {
    result.textContent = `Result: ${parseFloat(num1.value) / parseFloat(num2.value)}`;
});
