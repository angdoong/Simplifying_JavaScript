// [tip - 07] :: 펼침연산자로 배열을 본떠라
/* 
    펼침연산자를 사용하면 최소한의 코드로 배열을 빠르게 생성하고 조작할 수 있다
    (...)
*/

const cart = ['Naming and Necessity', 'Alice in Wonderland'];
const copyCart = [...cart] // ...cart 단독 사용이 안된다. 정보를 어디든 펼쳐 넣어야 한다 []


function removeItem(items, removable) {
    const updated = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== removable) {
            updated.push(items[i]);
        }
    }
    return updated;
}

// 위의 코드를 단순하게 하기위해 splice()를 사용해보자
function removeItem(items, removable) {
    const index = items.indexOf(removable);
    items.splice(index, 1); // index번째에서 1개제거
    return items;
}
// 단, 문제가 있다. splice() 메서드가 원본배열을 조작한다.

const books = ['practical vim', 'moby dick', 'the dark tower'];
const recent = removeItem(books, 'moby dick'); // practical vim, the dark tower
const novels = removeItem(books, 'practical vim') // the dark tower
/* 
    novels에 포함되어있는 값은 위와같이 'the dark tower' 만 포함되어있다.
    처음 호출할때 recent에서 'moby dick'을 제거한 배열을 반환해서
    이 과정에 배열 books도 변경된것이다. (조작의 위험!)
*/

// 해결방안 : slice()매서드로 원본배열 변경하지 않고 일부를 반환후 concat()을 이용하여 연결
function removeItem(items, removable) {
    const index = items.indexOf(removalbe);
    return items.slice(0, index).concat(items.slice(index + 1));
}
// 하지만, 무엇을 반환하는지 정확하지않다.
// concat()으로 배열 두개를 병합해서 배열 하나를 생성하고, 무슨일이일어나는지
// 정확히  알기 어렵다. 그래서 펼침연산자를 사용하기에 적합하다.

function removeItem(items, removalbe) {
    const index = items.indexOf(removable);
    return [...items.slice(0, index), ...items.slice(index)]
}
/*
    - 조작이 없다
    - 읽기 쉽고 간결하다.
    - 재사용가능
    - 예측가능
*/

// 함수의 인수목록을 생성할 때 펼침연산자를 사용하는것은 많이사용하는 방법중 하나
// example
const book = ['Reasons and Persons', 'Derek Parfit', 19.99];
function formatBook(title, author, price) {
    return `${title} by ${author} $${price}`
}
formatBook(book[0], book[1], book[2]);
// 위와같이 정보를 줄 수 있지만, 정보가 변경 됬을경우(예를들면 출판연도가추가되었을때)
// 다음과 같은 코드를 작성할 수있다. 매개변수는 인수의 목록이므로 
// 펼침연산자를 이용하면 배열의 인수목록으로 빠르게 쉽게 변환할 수 있다.
formatBook(...book);

/*
    slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]
    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. 
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = array1.concat(array2);
    console.log(array3);
    // expected output: Array ["a", "b", "c", "d", "e", "f"]

*/