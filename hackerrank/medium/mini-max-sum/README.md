# Mini-Max Sum

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.  

**Example**   
$arr = [1, 3, 5, 7, 9]$

The minimum sum is $1 + 3 + 5 + 7 = 16$ and the maximum sum is $3 + 5 + 7 + 9 = 24$.  The function prints

    16 24
    
**Function Description**  

Complete the $miniMaxSum$ function with the following parameter(s):

- $arr[5]$: an array of $5$ integers  

**Print**   
  
Print two space-separated integers on one line: the minimum sum and the maximum sum of $4$ of $5$ elements.No value should be returned. 

**Note** For some languages, like C, C++, and Java, the sums may require that you use a long integer due to their size.

**Input Format**

A single line of five space-separated integers.

**Constraints**

$1 \le arr[i] \le 10^9$  

**Output Format**

## Solution

**Language:** JavaScript  
**Runtime:** N/A  
**Memory:** N/A  
**Submitted:** 2026-09-08T14:13:36.922Z  

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum + arr[i]
    }
    console.log((sum-Math.max(...arr))+" "+((sum-Math.min(...arr))))
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

```

---

[View on HackerRank](https://www.hackerrank.com/challenges/mini-max-sum/problem)