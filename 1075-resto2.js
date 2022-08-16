let input = require('fs').readFileSync('./dev/1075-stdin', 'utf8');
let lines = input.split('\n');

let n = lines.shift();

for (let i = 0; i < 10000; i++) {
    if (i % n === 2) {
        console.log(i);
    }
}