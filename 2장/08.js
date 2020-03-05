// [tip - 08] :: push() 메서드 대신 펼침 연산자로 원본변경을 피하라

// 배열을 조작하기 위해 흔히 사용하는 push() : 새로운 항목을 배열뒤에 추가해 원본배열변경
// push() 매서드로 인해 발생하는 문제

/* 
    장바구니 상품목록을 받아 내용을 요약하는 함수
    - 할인금액확인
    - 할인상품이 두개이상 : 오류객체반환
    - 오류없을시 : 사은품증정
*/ 

const cart = [
    {
      name: 'The Foundation Triology',
      price: 19.99,
      discount: false,
    },
    {
      name: 'Godel, Escher, Bach',
      price: 15.99,
      discount: false,
    },
    {
      name: 'Red Mars',
      price: 5.99,
      discount: true,
    },
  ];
  
  const reward = {
    name: 'Guide to Science Fiction',
    discount: true,
    price: 0,
  };
  
  function addFreeGift(cart) {
    if (cart.length > 2) {
      cart.push(reward); 
      return cart; // 위아래 두줄을 return [...cart, reward]로 수정 : 기존의 배열을 가져다 대괄호에 펼치고, 새로운 상품을 배열의 마지막에 추가
    }
    return cart;
  }
  
  function summarizeCart(cart) {
    const discountable = cart.filter(item => item.discount);
    if (discountable.length > 1) {
      return {
        error: 'Can only have one discount',
      };
    }
    const cartWithReward = addFreeGift(cart);
    return {
      discounts: discountable.length,
      items: cartWithReward.length,
      cart: cartWithReward,
    };
  }

  // 위의 코드를 아래와 같이 모든변수를 함수 상단으로 옮길때
  function summarizeCartUpdated(cart) {
    const cartWithReward = addFreeGift(cart);
    const discountable = cart.filter(item => item.discount);
    if (discountable.length > 1) {
      return {
        error: 'Can only have one discount',
      };
    }
    return {
      discounts: discountable.length,
      items: cartWithReward.length,
      cart: cartWithReward,
    };

// addFreeGift()를 사용하면 배열cart를 조작하고, 
// 장바구니에 사은품을 추가해 새로운 변수에 할당해도 cart가 조작된 후이고
// 결국 상품 세가지 이상선택하고 그중하나가 할인상품인 모든고객에게 오류를 발생한다.


// shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는
const array1 = [1, 2, 3];
const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1