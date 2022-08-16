let input = require('fs').readFileSync('./dev/1078-stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());

if (n < 2 || n > 1000) {
    return;
}

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${n} = ${i * n}`);
}