function calculateSum() {
   const num1 = parseFloat(document.getElementById('number1').value);
   const num2 = parseFloat(document.getElementById('number2').value);
   const sum = num1 + num2;
   document.getElementById('result').innerText = 'Resultado: ' + sum;
}
