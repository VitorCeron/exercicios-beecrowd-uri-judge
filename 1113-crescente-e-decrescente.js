let input = require('fs').readFileSync('./dev/1113-stdin', 'utf8');
let lines = input.split('\n');

let x = 0;
let y = 1;

while (x !== y) {
    let numbers = lines.shift().split(" ");
    x = parseInt(numbers[0]);
    y = parseInt(numbers[1]);

    if(x > y) {
        console.log("Decrescente");
    }

    if(x < y) {
        console.log("Crescente");
    }
}