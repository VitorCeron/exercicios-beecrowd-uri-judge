
let j = 1;
let i = 0;

const parseNumber = (number) => +(parseFloat(number).toFixed(2));

for(let num = 1; num <= 33; num++) {
    console.log(`I=${parseNumber(i)} J=${parseNumber(j)}`);

    if(num % 3 === 0) {
        i = parseFloat(i) + parseFloat(0.2);
        j = i + 1;
    } else {
        j = parseFloat(j) + 1;
    }
}