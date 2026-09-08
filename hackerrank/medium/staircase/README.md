# Staircase

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Staircase detail

This is a staircase of size $n = 4$:

	   #
	  ##
	 ###
	####

Its base and height are both equal to $n$.  It is drawn using `#` symbols and spaces. **The last line is not preceded by any spaces.** 

Write a program that prints a staircase of size $n$.  

**Function Description**

Complete the $staircase$ function with the following parameter(s):  

- $int\ n$: an integer  

**Print**  

Print a staircase as described above. No value should be returned.  
**Note**: The last line is not preceded by spaces. All lines are right-aligned.

**Input Format**

A single integer, $n$, denoting the size of the staircase.

**Constraints**

$0 \lt n \le 100$ .  

**Output Format**

## Solution

**Language:** JavaScript  
**Runtime:** N/A  
**Memory:** N/A  
**Submitted:** 2026-09-08T19:02:29.058Z  

```js
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    for(let i=1;i<=n;i++){
        let row=""
        for(let j=1;j<=n-i;j++){
            row += " "
        }
        for(let j=1;j<=i;j++){
            row += "#"
        }
    console.log(row)
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}

```

---

[View on HackerRank](https://www.hackerrank.com/challenges/staircase/problem)