let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.onclick = function () {
  alert('Hello 프로퍼티 리스너');
};

btn2.addEventListener('click', helloevent1);
btn2.addEventListener('click', hellovevent2);

function helloevent1() {
  alert('addEventLister 1');
}
function hellovevent2() {
  alert('addEventLister 2');
}

btn2.removeEventListener('click', helloevent1);
