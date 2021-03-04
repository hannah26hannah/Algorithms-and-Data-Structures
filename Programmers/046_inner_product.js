// 내적

function solution(a, b) {
    let answer = 0;
    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i]
    }
    console.log(answer)
}

// solution([1, 2, 3, 4], [-3, -1, 0, 2])
solution([-1, 0, 1], [1, 0, -1])

// reduce 함수로 계산하기
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}