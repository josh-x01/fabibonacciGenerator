/*
This program generate fibonacci sequence
Author: Eyasu Yidnekachew
E-mail: eyasuyid@gmail.com
*/

function fabibonacciGenerator(n) {
    var fabibonacciList = [];
    for (var i = 0; i < n ; i++) {
        if (i < 2) fabibonacciList.push(i);
        else fabList.push(fabibonacciList[i-2] + fabibonacciList[i - 1]);      
    } return fabibonacciList;
}

// sample
console.log(fabibonacciGenerator(10));
