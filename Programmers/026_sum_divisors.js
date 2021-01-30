function solution(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) divisors.push(i);
    }
    return divisors.reduce((acc, curr) => acc + curr);
}

// the code above will throw an error when n is 0. 

function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n === 0) return;
        if (n % i == 0) answer += i;
    }
    return answer;
}