// [tip - 09] :: 펼침연산자로 정렬에 의한 혼란을 피하라
//  sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

const staff = [
    {
        name: 'Joe',
        years: 10,
    }, {
        name: 'Theo',
        years: 5,
    }, {
        name: 'Dyan',
        years: 10,
    },
];
// 근속연수로 정렬해보자

function sortByYears(a, b) {
    if(a.years === b.years) {
        retrun 0;
    }
    retrun a.years - b.years;
}
const sortByName = (a, b) => {
    if (a.name === b.name) {
        return 0;
    }
    return a.name > b.name ? 1 : -1;
};

staff.sort(sortByYears);

//이름순, 근속연도순 사용자가 정렬버튼을 누를때마다 순서가바뀌면 신뢰성이 떨어진다.
// 사용해야할 매서드가 원본조작할때, 사본을 조작해라
// 배열을 정렬하기 전에 원본배열과 펼침연산자로 새로운 배열을 만들면 됨.

[...sraff].sort(sortByYears);

