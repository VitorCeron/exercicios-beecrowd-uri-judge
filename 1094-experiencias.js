let input = require('fs').readFileSync('./dev/1094-stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());

let quantityFrog = 0;
let quantityRat = 0;
let quantityRabbit = 0;
let total = 0;

for (i = 0; i < n; i++){
    let line = lines.shift();
    [number, type] = line.split(' ');
    number = parseInt(number);

    if (type === 'C') {
        quantityRabbit += number;
    }

    if (type === 'S') {
        quantityFrog += number;
    }

    if (type === 'R') {
        quantityRat += number;
    }
}

function calcPercent(number, total) {
    return (number / total * 100).toFixed(2);
}

total = quantityRabbit + quantityFrog + quantityRat;
console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${quantityRabbit}`);
console.log(`Total de ratos: ${quantityRat}`);
console.log(`Total de sapos: ${quantityFrog}`);

console.log(`Percentual de coelhos: ${calcPercent(quantityRabbit, total)} %`);
console.log(`Percentual de ratos: ${calcPercent(quantityRat, total)} %`);
console.log(`Percentual de sapos: ${calcPercent(quantityFrog, total)} %`);