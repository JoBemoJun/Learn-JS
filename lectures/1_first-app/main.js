console.log('Hello');
console.log('Hello@@@');
console.log('Hello@@@', 'world!', 'javascript');
console.log('안녕');
//alert('Hello Javascript!');
/*
console.log('Hello');
console.log('Hello@@@');
console.log('Hello@@@', 'world!', 'javascript');
*/
let str = 'Hello Javascript';
let number = 30;
console.log('문자열: ', str);
console.log('number: ', number);
console.log('==========');

function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

sayHello();
console.log('----------');
sayHello();
console.log('==========');
let obj = {
  number: 30, //프로퍼티
  SayHello: function () {
    console.log('obj>Hello1');
    console.log('obj>Hello2');
    console.log('obj>Hello3');
  },
};

console.log(obj.number);
console.log('----------');
console.log(obj.SayHello);
console.log('==========');
