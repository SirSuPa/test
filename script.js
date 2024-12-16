console.log("kunakorn manokham")
console.log("note 20")
let currentNumber = '';
        let previousNumber = '';
        let operator = '';

        function appendNumber(number) {
            currentNumber += number;
            updateDisplay(currentNumber);
        }

        function setOperator(op) {
            if (currentNumber === '') return;
            if (previousNumber !== '') {
                calculate();
            }
            operator = op;
            previousNumber = currentNumber;
            currentNumber = '';
        }

        function calculate() {
            if (currentNumber === '' || previousNumber === '' || operator === '') return;
            let result;
            const prev = parseFloat(previousNumber);
            const curr = parseFloat(currentNumber);

            switch (operator) {
                case '+':
                    result = prev + curr;
                    break;
                case '-':
                    result = prev - curr;
                    break;
                case '*':
                    result = prev * curr;
                    break;
                case '/':
                    result = curr === 0 ? 'Error' : prev / curr;
                    break;
                default:
                    return;
            }

            currentNumber = result;
            operator = '';
            previousNumber = '';
            updateDisplay(result);
        }

        function clearDisplay() {
            currentNumber = '';
            previousNumber = '';
            operator = '';
            updateDisplay('');
        }

        function updateDisplay(value) {
            document.getElementById('display').value = value;
        }