export default function percent() {
    const data = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        OUTROS: 19849.53,
    };

    let total = 0;
    Object.values(data).forEach((value) => (total += value));

    let percents = {};
    Object.entries(data).forEach(([state, value]) => {
        percents[state] = ((value * 100) / total).toFixed(2)
    });

    document.getElementById('sp').textContent = `SP = ${percents.SP}%`;
    document.getElementById('rj').textContent = `RJ = ${percents.RJ}%`;
    document.getElementById('mg').textContent = `MG = ${percents.MG}%`;
    document.getElementById('es').textContent = `ES = ${percents.ES}%`;
    document.getElementById('outros').textContent = `Outros = ${percents.OUTROS}%`;
}