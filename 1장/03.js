// [tip - 03] :: 블록 유효범위 변수로 정보를 격리하라
/*
    블록 유효 범위 변수(let, const) : 
    - 블록 내에서만 접근 가능
    - 함수 외부에서 선언한 변수는 블록내부 접근 가능
    - 줄괄호 밖에서는 접근불가
*/
//example
let abcd = 1;
{
    let abcde = 2;
    console.log('블록안', abcd); // 블록안 1
    console.log('블록안', abcde); // 블록안 2
}

console.log('바깥', abcd); // 바깥 1
console.log('바깥', abcde); // Uncaught ReferenceError: abcde is not defined

// p.34예제
const items = document.querySelectorAll('li');
for(var i = 0; i< items.length; i++) {
    items[i].addEventListener('click', () => {
        alert(i); // 모든요소가 3을 return > var로 할당한 변수는 함수 내에서 마지막으로 할당한 값을 참조함
    })
};

// var을 let으로 이용하면, for문이 반복될때마다 값을 잠근다.