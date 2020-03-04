/*
변수를 할당하는 방법 : var, let, const
이 중, 대부분의 경우는 const를 선택하는것이 좋다.
const로는 가장 적은것을 할 수 있기 때문이고, 
const는 코드를 읽기 쉽게 만드는 제약 사항을 가지고 있다.
*/

const taxRate = 0.1;
const total = 100 + (100 * taxRate);
// 100행의 코드를 건너 뛰었습니다.
return `구매 금액은 ${total}입니다.`;
var taxRate = 0.1;
var total = 100 + (100 * taxRate);
// 100행의 코드를 건너 뛰었습니다.
return `구매 금액은 ${total}입니다.`;
 
/* 
첫번째코드 :: const는 재할당할 수 없기때문에 110이 return된다는것을 알 수 있음
두번재코드 :: total이 중간에 변경되거나 제외될 수 있는상황이 생김 일일히 100행의 코드를 살펴보며 알아내야함

수정수정
:D
*/


 