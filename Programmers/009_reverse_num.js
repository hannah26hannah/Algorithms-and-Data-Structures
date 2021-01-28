// 자연수 뒤집어 배열로 만들기 

// 문제 : 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// tip : 반환하는 배열의 원소는 '숫자' 형태를 유지해야 한다. 

// 문자로 풀이하기
function solution(n) {
    n += "";
    return n.split("").map(el => +el).reverse();
}

// 문자로 풀이하는 다른 방법 return (n+"").split("").reverse().map(el => parseInt(el)); 

// 숫자로 풀이하기
function solution(n) {
    let arr = [];
    do {
        arr.push(n % 10);
        n = Math.floor(n/10);
    } while (n>0);
    return arr;
}
