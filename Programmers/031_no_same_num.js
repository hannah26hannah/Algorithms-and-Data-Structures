// 인접한 같은 숫자는 하나만 남긴다.

function solution(arr) {
    return arr.filter((el, i) => el !== arr[i+1]);
}
// console.log(solution([1, 1, 3, 3, 0, 1, 1])); 
console.log(solution([4, 4, 4, 3, 3]));

//  [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
//  [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.