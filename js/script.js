document.getElementById('calculate-button').onclick = function() {
	// coletar números dentro das caixas de input
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');
	//val1 refere-se a primeira caixa de texto	
	//val2 refere-se a segunda caixa de texto
	//value é a propriedade que contém o valor do input
	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);
	//váriavel sum remete à soma de val1 e val2	
	//let sum = val1 + val2;
	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	let operationResult = getResult (val1, val2, operation)
	// mostra os valores inseridos no console
	// mostra pelo console se o resultado está saindo como esperado
	console.log(val1);
	console.log(val2);
	//console.log(sum);
	console.log(operation);
	//mostrar o resultado dentro elemento com id "result"
	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult
	//resultElement.innerText = sum;
/**	if (operation === '+') {
		resultElement.innerText = val1 + val2;
	} else if (operation === '-') {	
		resultElement.innerText = val1 - val2;
	} else if (operation === '*') {
		resultElement.innerText = val1 * val2;
	} else if (operation === '/') {
		resultElement.innerText = val1 / val2;
	} */
	function getResult(num1, num2, operation) {
		if (operation === '+') {
			return num1 + num2;
		} else if (operation === '-') {
			return num1 - num2;
		} else if (operation === '*') {
			return num1 * num2
		} else if (operation === '/') {
			return num1 / num2
		} else if (operation === '**') {
			return num1 ** num2
		}
	}
	/** Ainda assim, aparece o NaN onde seria o resultado
	if (isNaN(val1)) {
		alert('Digite valores nas caixas!')
	} else if (isNaN(val2)) {
		alert('Digite valores nas caixas!')
	} */
	if (isNaN(val1)) {
		resultElement.innerHTML = 'Digite valores nas caixas!'
	} else if (isNaN(val2)) {
		resultElement.innerHTML = 'Digite valores nas caixas!'
	}
}