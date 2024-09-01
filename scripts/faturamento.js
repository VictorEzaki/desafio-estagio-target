export default async function fetchData() {
    const res = await fetch('../dados.json');
    const data = await res.json();
    faturamento(data);
}

const faturamento = (data) =>{
    const total = document.getElementById('total');
    const dayMax = document.getElementById('day-max');
    const dayMin = document.getElementById('day-min');
    const avg = document.getElementById('avg');

    let numbers = data.map((element) => element.valor);
    let diasFaturados = numbers.filter((number) => number > 0);
    let max = Math.max(...numbers);
    let min = Math.min(...diasFaturados);
    let sum = numbers.reduce((total, number) => total + number, 0);
    let media = sum / 30;
    let maxMedia = numbers.filter((number) => number > media);

    let normalizeNumbers = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    max = normalizeNumbers.format(max);
    min = normalizeNumbers.format(min);
    sum = normalizeNumbers.format(sum);
    media = normalizeNumbers.format(media);
    maxMedia = maxMedia.map((number) =>
        normalizeNumbers.format(number),
    );

    total.textContent = `Total faturado:  ${sum}`;
    dayMax.textContent = `Maior faturamento do mês: ${max}`;
    dayMin.textContent = `Menor faturamento do mês: ${min}`;
    avg.textContent = `Dias acima da média mensal de faturamento: ${maxMedia.length}`;
}