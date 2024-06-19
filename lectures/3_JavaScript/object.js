'use strict';

// 객체 리터럴 문법
// const person = {
//   name: '조범준',
//   age: 27,
// };
// person.job = '개발자';
// 객체 생성자 문법
// const person = new Object();
// person.name = '조범준';
// person.age = 27;
// console.log(person);

// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'health'],
//   hello: function () {
//     alert('Hello!');
//   },
//   greeting: function () {
//     alert('Hi!');
//   },
//   hobby: {
//     name: 'programing',
//     alert: function () {
//       alert('programing');
//     },
//   },
// };
// console.log(person.name[0]);
// console.log(person.name[1]);
// // person.hello();
// console.log(person.hobby.name);
// person.hobby.alert();
// console.log(person['name'][0]);
// console.log(person['name'][1]);
// person['hello']();
// console.log(person['hobby']['name']);
// person['hobby']['alert']();
// delete person.name;
// delete person['age'];
// console.log(person);

// function printPerson({ name, age, hobby }) {
//   console.log(
//     `제 이름은 ${name}이며, 나이는 ${age}살 입니다.그리고 취미는 ${hobby} 입니다.`
//   );
// }
// function createPerson(name, age, hobby) {
//   return {
//     name: name,
//     age: age,
//     hobby: hobby,
//   };
// }
//ES5
// function Person(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }
// //ES6
// class Person {
//   constructor(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//   }
// }
// const person1 = new Person('김길동', 25, '먹기');
// let person1 = createPerson('김길동', 25, '먹기');
// let person2 = createPerson('홍길동', 26, '잡기');
// let person3 = createPerson('이길동', 27, '걷기');
// let person4 = createPerson('박길동', 28, '뛰기');
// let person5 = createPerson('개길동', 29, '점프');
// let person6 = createPerson('구길동', 20, '헬스');
// printPerson(person1);
// printPerson(person2);
// printPerson(person3);
// printPerson(person4);
// printPerson(person5);
// printPerson(person6);
// const { hobby, name, age } = person;
// console.log('name: ', name);
// console.log('age: ', age);
// console.log('hobby: ', hobby);

// const fruits = ['사과', '포도', '딸기'];
// const [a, b] = fruits;
// console.log('a: ', a);
// console.log('b: ', b);

// let username = '조범준';
// console.log(username);
// changeName(username);
// console.log(username);

// function changeName(name) {
//   name = '홍길동';
//   console.log(name);
// }
// console.log('---------');

// const person1 = {
//   name: '조범준',
//   age: 27,
// };

// if ('name' in person1) {
//   console.log('존재 합니다.');
// } else {
//   console.log('존재하지 않습니다.');
// }

// let person2 = person1;
// let person2 = { ...person1 };
// let person2 = Object.assign({}, person1);
// person2.name = '홍길동';
// console.log(person1);
// console.log(person2);

// console.log(person);
// changePersonName1(person);
// console.log(person);
// changePersonName2(person);
// console.log(person);

// function changePersonName1(per) {
//   let name = per.name;
//   let age = per.age;
//   name = '홍길동';
//   age = 28;
// }
// function changePersonName2(per) {
//   per.name = '홍길동';
//   per.age = 28;
// }
const person = {
  name: '짐코딩',
};
console.log(person.hasOwnProperty('name')); // true
console.log(Object.hasOwn(person, 'name')); // true

if (person.name) {
  console.log('true~~~');
}
