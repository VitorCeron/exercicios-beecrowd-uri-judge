let input = require('fs').readFileSync('./dev/1099-stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    let numbers = lines.shift().split(" ");

    const { x, y } = getXAndY(numbers);
    const result = sumOdds(x, y);

    console.log(result);
}

function getXAndY (numbers) {
    let x = parseInt(numbers[0]);
    let y = parseInt(numbers[1]);

    if (x > y) {
        x = parseInt(numbers[1]);
        y = parseInt(numbers[0]);
    }

    return {
        x,
        y
    }
}

function sumOdds (x, y) {
    let total = 0;
    for (let j = x + 1; j < y; j++) {
        if (j % 2 !== 0) {
            total += j;
        }
    }

    return total;
}