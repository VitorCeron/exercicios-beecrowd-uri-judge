
let j = 7;
let i = 1;

for(let num = 0; num <= 14; num++) {
    console.log(`I=${i} J=${j}`);
    
    if(j === 5) {
        j = 7;
        i = i + 2;
    } else {
        j--;
    }
}