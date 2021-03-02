// 3진법 뒤집기
// toString(), parseInt(), reverse(), spread operator

function solution(n) {
    let num = '';
    while(n > 2) {
        num += n % 3;
        n = Math.floor(n / 3);
    }
    
    num += n;    
    return parseInt(num, 3);

}

function solution2 (n) {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

function solution3(n) {
    const answer = [];
    while(n !== 0) {
        answer.unshift(n % 3);
        n = Math.floor(n/3);
    }
    return answer.reduce((acc,v,i) => acc + (v * Math.pow(3, i)),0);
}


console.log(solution(45))
