// [tip - 05] :: 배열로 유연한 컬렉션을 생성하라
// map(), filter(), reduce() 등의 배열 메서드를 이용하면 코드 한줄로 정보를 쉽게 변경/갱신 가능
// 객체 순회시, Object.keys()를 실행하여 객체의 키를 배열에 담은 후 순회해야함
const game1 = {
    player: 'Jim Jonas',
    hits: 2,
    runs: 1,
    errors: 0,
  };

  const game2 = {
    player: 'Jim Jonas',
    hits: 3,
    runs: 0,
    errors: 1,
  };

  const total = {};

  const stats = Object.keys(game1); 
  for (let i = 0; i < stats.length; i++) {
    const stat = stats[i];
    if (stat !== 'player') {
      total[stat] = game1[stat] + game2[stat];
    }
  }
// {
//   hits: 5,
//   runs: 1,
//   errors: 1
// }
