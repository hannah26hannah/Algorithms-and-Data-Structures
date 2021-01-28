// x만큼 간격이 있는 n개의 숫자  
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.


function solution(x, n) {
    let arr = [];
    do {
        arr.push(arr.length > 0 ? arr[arr.length - 1] + x : x);
    } while (arr.length < n)
    return arr;
}

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
// Array.fill(n) : n개의 원소를 가진 Array를 만들고, 그 안을 x로 채운다. 
// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다. 