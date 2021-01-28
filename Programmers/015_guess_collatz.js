function solution(num) {
    let cnt = 0;
    do {
        if (num === 1) break;
        if (num % 2 === 0) {
            num /= 2
            cnt++;
        } else {
            num = num * 3 + 1;
            cnt++
        }
        if (cnt >= 500 && num !== 1) {
            cnt = -1;
            break;
        } 
        
    } while (num !== 1 && cnt < 500)
        return cnt;
}]

// 또는 인풋을 수정해 재귀함수로 사용해도 가능하다. 
// function collatz(num,count = 0) {
//     return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
// }