// 자연수 인수를 받아 각 자릿수의 합을 구하고 반환한다. 
// 각 자리의 수를 추출하는 방법은 009번의 reverse_num.js를 참고할 수 있다. 

function solution (n) { // (8ms 소요)
    let x = 0;
    do {
        x += n % 10;
        n = Math.floor(n / 10);
    } while (n > 0)
    return x;
}

// 문자열로 취급하고 reduce를 사용하는 다른 방법 (7ms 소요)

function solution2 (n) {
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
