let input = require('fs').readFileSync('./dev/1061-stdin', 'utf8');
let lines = input.split('\n');

let startDay = lines.shift();
startDay = startDay.split(' ')[1];

let startTime = lines.shift();
let startTimeSplited = startTime.split(':');

let startHour = startTimeSplited[0];
let startMinute = startTimeSplited[1];
let startSecond = startTimeSplited[2];

let endDay = lines.shift();
endDay = endDay.split(' ')[1];

let endTime = lines.shift();
let endTimeSplited = endTime.split(':');

let endHour = endTimeSplited[0];
let endMinute = endTimeSplited[1];
let endSecond = endTimeSplited[2];

let diffSeconds = endSecond - startSecond;
let diffMinute = endMinute - startMinute;
let diffHour = endHour - startHour;
let diffDays = endDay - startDay;

if(diffSeconds < 0) {
    diffSeconds = diffSeconds + 60;
    diffMinute--;
}

if(diffMinute < 0) {
    diffMinute = diffMinute + 60;
    diffHour--;
}

if(diffHour < 0) {
    diffHour = diffHour + 24;
    diffDays--;
}

console.log(`${diffDays} dia(s)`);
console.log(`${diffHour} hora(s)`);
console.log(`${diffMinute} minuto(s)`);
console.log(`${diffSeconds} segundo(s)`);

