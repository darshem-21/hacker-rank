# Solve Me First

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Complete the function $solveMeFirst$ to compute the sum of two integers.

**Example**  
$a = 7$  
$b = 3$  

Return $10$.

**Function Description**  

Complete the $solveMeFirst$ function with the following parameters:  

- $int\ a$: the first value
- $int\ b$: the second value

Returns  
- $int$: the sum of $a$ and $b$


**Input Format**

 

**Constraints**

 $1 \le a, b \le 1000$   

**Output Format**

## Solution

**Language:** JavaScript  
**Runtime:** N/A  
**Memory:** N/A  
**Submitted:** 2026-09-08T06:15:17.484Z  

```js
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solveMeFirst(a, b) {
    let x = a+b
    return x
  // Hint: Type return a+b below   
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = solveMeFirst(a, b);
    console.log(res);
}

```

---

[View on HackerRank](https://www.hackerrank.com/challenges/solve-me-first/problem)