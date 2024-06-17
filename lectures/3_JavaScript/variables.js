'use strict';
// let teacher = '짐코딩';
// console.log(teacher);
// teacher = '홍길동';
// console.log(teacher);

// let teacher = '김길동';

// const는 한번 선언후 값 변경 x
// const username = '짐코딩';
// console.log(username);
// username = '홍길동';

//const가 let보다 성능에 좋은 영향

// {
//   let a = '변수';
//   console.log('a: ', a);
//   {
//     let c = 'c변수';
//     console.log('c: ', c);
//     console.log('a: ', a);
//   }
//   console.log('c: ', c);
// }
// console.log('a: ', a);

// console.log(number1);
let number1;

console.log(number2);
{
  var number2 = 3;
  var number2 = 4;
}
console.log(number2);
console.log(number1);

number1 = 1;
console.log(number1);

number3 = 1;
