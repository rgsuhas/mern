// function to read text from filr input.txt
var fs = require('fs');
let text = fs.readFileSync("input.txt");

console.log(text.toString());
let i=1;
while(i<5){
    console.log('hey'+i);
    i++;
}
