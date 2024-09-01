export default function invert(){
    const resultReverse = document.getElementById('result-reverse')
    const palavraInput = document.getElementById('reverse')
    const palavra = palavraInput.value

    let reversed = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        reversed += palavra[i]
    }

    resultReverse.textContent = reversed;
}

const button = document.getElementById('invert')
button.addEventListener('click', invert)