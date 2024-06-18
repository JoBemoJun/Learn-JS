'use strict';

// console.log('hello ' + 'world!');
// console.log('3' + 3);
// console.log(typeof ('3' + 3));
// console.log('3' + 5 + 8);
// console.log(3 + 5 + '8');

// let x = 10;
// let y = 20;

// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x * y);
// console.log(9 % 2);

// let number = prompt('숫자를 입력해주세요!');
// if (number % 2 == 0) {
//   console.log('짝수입니다.');
// } else {
//   4;
//   console.log('홀수입니다.');
// }

/**
 * x++ 연산 후 증가
 * ++x 연산 전 증가
 * x-- 연산 후 감소
 * --x 연산 전 감소
 */

// let result = x++ + y;
// console.log('x: ', x);
// console.log('y: ', y);
// console.log('result: ', result);

/** 비교 연산
 * == 같다
 * >= 크거나 같다
 * <= 작거나 같다
 * === 데이터 타입도 같다
 * != 같지 않다
 * !== 같지않다 (데이터 타입까지 비교)
 */

// let a = 20;
// let b = '20';
// console.log(a == b); // => true
// console.log(a === b); // => false
// console.log(a != b); // => false
// console.log(a !== b); // => true

/** 할당 연산자
 *  a += b  => a에 b를 더해서 a에 넣는다
 *  a -= b  => a에 b를 뺀후 a에 넣는다
 *  a *= b  => a와 b를 곱한 값을 a에 넣는다
 *  a /= b  => a와 b를 나눈 값을 a에 넣는다
 */

// let x = 10;
// let y = 10;
// x += y;
// console.log(x);

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
//   console.log(`${i}번째 sum=${sum}`);
// }

// let x = true;
// let y = true;
// console.log(x && y); //둘다 true 일때 true
// console.log(x || y); //둘중 하나라도 true이면 true
// console.log(!x); //false일때 true

let btn = document.querySelector('#btn');
let emaliEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');

btn.addEventListener('click', function () {
  let email = emaliEl.value;
  let password = passwordEl.value;
  // console.log('email: ', email);
  // console.log('password: ', !password);

  if (password && password.length === 8) {
    console.log('성공');
  } else {
    console.log('실패');
  }
});
//   if (email === '' || valudateEmail(email)) {
//     console.log('이메일이 유효하지 않습니다.');
//   } else if (!password) {
//     console.log('비밀번호를 입력해주세요.');
//   } else if (!(password.length >= 8 && password.length <= 16)) {
//     console.log('비밀번호는 8~16자 이내 입니다.');
//   } else {
//     console.log('로그인 성공');
//   }
// });

function valudateEmail(email) {
  return true;
}

let number = 10;
let message = number % 2 === 1 ? '홀수 입니다.' : '짝수 입니다.';
console.log(message);
