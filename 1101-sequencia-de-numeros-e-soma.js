let input = require('fs').readFileSync('./dev/1101-stdin', 'utf8');
let lines = input.split('\n');

let j = 1;

do {
    let numbers = lines.shift().split(" ");
    const { m, n } = getMAndN(numbers);

    if (m <= 0) {
        j = m;
        continue;
    }
    
    const { sequenceNumbers, total } = sumTotal(m, n);

    console.log(`${sequenceNumbers.join(' ')} Sum=${total}`);
} while (j > 0);

function getMAndN (numbers) {
    let m = parseInt(numbers[0]);
    let n = parseInt(numbers[1]);

    if (m > n) {
        m = parseInt(numbers[1]);
        n = parseInt(numbers[0]);
    }

    return {
        m,
        n
    }
}

function sumTotal (m, n) {
    let total = 0;
    let sequenceNumbers = [];

    for (let j = m; j <= n; j++) {
        sequenceNumbers.push(j);
        total += j;
    }

    return { sequenceNumbers, total };
}