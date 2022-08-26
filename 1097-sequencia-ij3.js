
let j = 7;
let i = 1;

for(let num = 1; num <= 15; num++) {
    console.log(`I=${i} J=${j}`);

    if(num % 3 === 0) {
        j = j + 4;
        i = i + 2;
    } else {
        j--;
    }
}