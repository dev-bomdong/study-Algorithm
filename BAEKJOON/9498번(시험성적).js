/*
[문제]
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

[입력]
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

[출력]
시험 성적을 출력한다

[예제 입력1]
100

[예제 출력1]
A
*/

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

let score = parseInt(input);

if (90<=score) {
console.log("A");
} else if (80<=score) {
console.log("B");
} else if (70<=score) {
console.log("C");
} else if (60<=score) {
console.log("D");
} else {
console.log("F");};