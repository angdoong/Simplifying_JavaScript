// [tip - 11] :: Object.assign() 으로 조작 없이 객체를 생성하라
/*
    Object.assign() 메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 
    대상 객체로 속성을 복사할 때 사용합니다. 대상 객체를 반환합니다. - mdn
*/

/* eslint-disable no-unused-vars */
const original = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
  };
  //  # START:add
  const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
  };
  
  const book = {
    author: 'Joe Morgan',
    title: 'Simplifying JavaScript',
  };
  
  function addBookDefaults(book, defaults) {
    const fields = Object.keys(defaults);
    const updated = {};
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      updated[field] = book[field] || defaults[field];
    }
    return updated;
  }
  //  # END:add
  
addBookDefaults(book, defaults);
// {author: "Joe Morgan", title: "Simplifying JavaScript", year: 2017, rating: null}
// 위의 코드를 아래와같이 단순하게 사용할 수 있다

Object.assign(defaults, book);
// {author: "Joe Morgan", title: "Simplifying JavaScript", year: 2017, rating: null}
/*
  원리 :
  1. 일련의 객체를 전달 받음
  2. 가장 먼저 인수로 받은 객체를 뒤이어 인수로 넘긴 객체의 키-값을 이용해서 갱신
  3. 첫번째 객체 반환
  4. 호출 시 인수 순서대로 적용되므로 먼저 전달한 객체부터 적용되고 가장 나중에 전달한 객체가 맨 마지막에 적용

  주의! 
  기본값 객체를 갱신하면서 원본객체를 조작하게됨
*/