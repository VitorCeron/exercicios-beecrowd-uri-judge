let input = require('fs').readFileSync('./dev/1080-stdin', 'utf8');
let lines = input.split('\n');

let biggerValue = 0;
let position = 0;

for (i = 0; i < 100; i++){
    let line = parseInt(lines.shift());

    if (line > biggerValue) {
        biggerValue = line;
        position = i + 1;
    }
}

console.log(biggerValue);
console.log(position);