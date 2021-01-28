// 나누어 떨어지는 숫자 배열 

// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요. 

function solution(numbers, divisor) {
    let arr = [];
    for (const num of numbers) {
        if (num % divisor === 0) {
            arr.push(num);
        }
    }
    return arr.length === 0 ? [-1] : arr.sort((a, b) => a - b);
}
// filter 함수를 써서 기존 함수에서 filter링한 결과만 갖는 array를 반환하도록 할 수도 있다.
let arr = numbers.filter(n => n % divisor === 0);
return arr.length === 0 ? [-1] : arr.sort((a,b) => a - b);
