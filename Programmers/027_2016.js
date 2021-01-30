// 2016년의 특정 날짜의 요일 구하기

// Date 객체를 활용한 방법 --> 하지만 node server의 locale에 따라 실패할 수도 있다고 한다. 
function solution (a, b) {
    let d = `2016-0${a}-${b}`;
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayOfWeek = week[new Date(d).getDay()];
    return dayOfWeek;
}

console.log(solution(5, 24)); // TUE


// 일수를 계산해 구하는 방법
function getDayName(a,b){
  const days = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let daySum;
  if (a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
    return days[daySum % 7];
}

console.log(getDayName(5, 24)); // TUE