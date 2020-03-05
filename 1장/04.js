// [tip - 04] :: 템플릿 리터럴로 변수를 읽을 수 있는 문자열로 변환하라
// 변수를 연결하지 않고 새로운 문자열로 만드는 방법

function generateLink(image, width) {
    const widthInt = parseInt(width, 10);
    return 'https://' + getProvider() + '/' + image + '?width=' + widthInt;
}
/* 
    템플릿리터럴
    - '," 대신 ` 사용
    - 변수에 할당한 문자열처럼 단순 문자열이 아니면 ${}로 변수를 감싼다
    - 문자열과 변수를 연결할 때 가장 자주 사용한다.
*/ 
// example
function greet(name) {
    return `Hi, ${name}`;
}
greet('Leo');
'Hi, Leo';

// 가급적이면 중괄호 내부에서 많은것을 안하는게 좋다. > 코드가 어수선해짐 so, 결괏값을 변수에 할당해 사용한다.
// 맨 위의 코드를 템플릿리터럴 한줄로 사용하면
function generateLink(image, width) {
    return `https://${getProvider()}/${image}?width=${parseInt(width, 10)}`;
}