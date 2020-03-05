// [tip - 06] :: Includes()로 존재여부를 확인하라
/* 
    자바스크립트 배열에서 특정문자열을 포함하고 있는지 확일할 때
    문자열의 위치를 찾아야함
    문자열 존재 : 문자열의 index로 위치확인
    문자열 존재하지 않으면 : -1반환
    문제는 index가 0일경우, false로 평가되서 존재하는 값이라도 false로 평가될 수 있음
*/

/*
    ES2016에 includes() 배열매서드를 이용하여
    값이 배열에 존재하는지 여부를 boolean값으로 확인가능
*/

// 기존
const sections = ['contact', 'shipping'];

function displayShipping(sections) {
  return sections.indexOf('shipping') > -1;
}

// includes() 사용
const sections = ['contact', 'shipping'];

function displayShipping(sections) {
  return sections.includes('shipping');
}