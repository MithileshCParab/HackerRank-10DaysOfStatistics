'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Create the function factorial here
 */

function factorial(x){
    if ( x === 0 ){
        return 1;
    }
    else{
        return x * factorial( x - 1 );
    }
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
