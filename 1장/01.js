// [tip - 01] :: const로 변하지 않는 값을 표현하라
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
*/


// [tip - 02] :: let과 const로 유효 범위 충돌을 줄여라
/*
    var : lexical scope(어휘적 유효 범위)
    let : block scope(블록 유효 범위 - if, for 같은 블록)
*/

function getLowestPrice(item) {
    var count = item.inventory; // 3
    var price = item.price; // 3
  
    if (item.salePrice) { // true
      var count = item.saleInventory; // 0 (count 재선언)
      if (count > 0) { //false
        price = item.salePrice;
      }
    }
  
    if (count) {  //0 = false
      return price;
    }
  
    return 0;
}

const item = { // 0
    inventory: 0,
    price: 3,
    salePrice: 0,
    saleInventory: 0,
};

const item = { // 2
    inventory: 3,
    price: 3,
    salePrice: 2,
    saleInventory: 1,
};

const item = { // 0
    inventory: 3,
    price: 3,
    salePrice: 2,
    saleInventory: 0,
};

// 위의 함수를 아래와같이 let으로 수정하면 이와같은 문제를 피할 수 있다 > let은 블록 유효 범위를 따르므로 블록 내부에 선언한 변수는 블록 외부에 존재하지 않기 때문
function getLowestPrice(item) {
    let count = item.inventory;
    let price = item.price;
  
    if (item.salePrice) {
      let count = item.saleInventory;
      if (count > 0) {
        price = item.salePrice;
      }
    }
  
    if (count) {
      return price;
    }
  
    return 0;
  }

  /* 
    const도 let과 같이 블록 유효 범위를 따른다. 
    여기서 count변수를 let대신 const로 바꿔주는것이 좋다 
    - count값을 재할당 하지 않기때문에 
    - 가격이 변경 될 수 있으므로 아예 다른이름의 변수로 주는것이 좋음
  */ 

 function getLowestPrice(item) {
    const count = item.inventory;
    let price = item.price;
  
    if (item.salePrice) {
      const saleCount = item.saleInventory;
      if (saleCount > 0) {
        price = item.salePrice;
      }
    }
  
    if (count) {
      return price;
    }
  
    return 0;
  }

  // let/const는 재선언하면 typeError발생!
  