let input = require('fs').readFileSync('./dev/1114-stdin', 'utf8');
let lines = input.split('\n');

const correctPassword = 2002;
let totalItens = lines.length;

for(let i = 0; i < totalItens; i++) {
    const password = parseInt(lines.shift());

    if (password === correctPassword) {
        console.log("Acesso Permitido"); 
        totalItens = i;
    } else {
        console.log("Senha Invalida"); 
    }
}