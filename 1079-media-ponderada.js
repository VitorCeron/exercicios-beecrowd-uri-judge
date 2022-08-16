let input = require('fs').readFileSync('./dev/1079-stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());

for (i = 0; i < n; i++){
    let line = lines.shift();

    let lineSplitted = line.split(' ');
    let value1 = parseFloat(lineSplitted[0]).toFixed(1);
    let value2 = parseFloat(lineSplitted[1]).toFixed(1);
    let value3 = parseFloat(lineSplitted[2]).toFixed(1);

    let average = (value1 * 0.2) + (value2 * 0.3) + (value3 * 0.5);
    console.log(average.toFixed(1));
}