export default function fibonacci(num){
    let num1 = 0
    let num2 = 1
    let num3 = 0

    while (num3 < num) {
        num3 = num1 + num2
        num1 = num2
        num2 = num3
    }
    return num3 === num;
}

const resultFibo = document.getElementById('resultFibo');
const calcular = document.getElementById('calcular');
const number = document.getElementById('number');

calcular.addEventListener('click', () => {
    const num = parseInt(number.value)

    if (isNaN(num)) {
        resultFibo.textContent = 'Por favor digite um número válido'
    } else if(fibonacci(num)){
        resultFibo.textContent = `O número ${num} está presente na sequência de fibonacci`
    } else{
        resultFibo.textContent = `O número ${num} não está presente na sequência de fibonacci`
    }
    document.getElementById('number').value = "";
})