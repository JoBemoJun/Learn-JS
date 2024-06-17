'use strict';

// // 배열 생성
// const frults = ['사과', '바나나', '딸기', '파인애플'];
// // const frults = new Array('사과', '바나나', '딸기');

// console.log('frults: ', frults);
// console.log(frults[0]);
// console.log(frults[1]);
// console.log(frults[2]);
// frults[2] = '포도';
// console.log(frults[2]);

// // 자주 사용하는 배열 API
// console.log('frults length: ', frults.length);
// console.log('마지막 값: ', frults[frults.length - 1]);

// // push() 메서드
// frults.push('귤');
// console.log(frults);

// // foreach() 메서드
// frults.forEach(function (item, index) {
//   console.log(index, item);
// });

// // pop() 메서드
// // frults.pop();
// // let removedItem = frults.pop();
// // console.log('removedItem: ', removedItem);
// // console.log('제거완료: ', frults);

// // shift() 메서드
// // frults.shift();
// // frults.shift();
// // console.log('frults: ', frults);

// // unshift() 메서드
// frults.unshift('수박');
// console.log('frults: ', frults);

// // indexOf() 메서드
// let index = frults.indexOf('파인애플');
// // let index = frults.indexOf('토마토');
// console.log('index: ', index);

// // splice() 메서드
// // let findIndex = frults.indexOf('파인애플');
// // console.log('findIndex: ', findIndex);
// // frults.splice(findIndex, 1);
// // console.log('frults: ', frults);

// 구조 분해 할당
// let fruits = ['사과', '바나나', '딸기'];
// let apple = fruits[0];
// let banana = fruits[1];
// let strawberry = fruits[2];

// let [apple, banana, strawberry, ...others] = [
//   '사과',
//   '바나나',
//   '딸기',
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
// ];
// console.log(apple);
// console.log(banana);
// console.log(strawberry);
// console.log(others);

// 전개 구문
// let fruits1 = ['사과', '바나나', '딸기'];
// let fruits2 = ['파인애플', '수박'];
// let items = ['귤', ...fruits1, ...fruits2];
// let [apple, banana, strawberry, pineapple] = [...fruits1, ...fruits2];
// console.log('apple: ', apple);
// console.log('banana: ', banana);
// console.log('strawberry: ', strawberry);
// console.log('pineapple: ', pineapple);
// console.log('items: ', items);

// Rest parameter
// print('a', 'b', 'c', 'd');

// function print(...values) {
//   values.forEach(function (value, index) {
//     console.log('index: ', index, 'value: ', value);
//   });
// }

// 얕은 복사 (Shallow copy)
// let source = ['사과', '바나나', '딸기'];
// let target = source;
// target[0] = '파인애플';
// console.log('source: ', source);
// console.log('target1: ', target);

// 깊은 복사 (deep copy)
let source = ['사과', '바나나', '딸기'];
// let target = [...source];
// let target = Array.from(source);
let target = source.slice();
target[0] = '파인애플';
console.log('source: ', source);
console.log('target1: ', target);
