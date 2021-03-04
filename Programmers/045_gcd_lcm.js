// 최대공약수(GCD), 최소공배수(LCM)
// 유클리드 호제법 두 개의 자연수 a, b에 대해 a를 b로 나눈 나머지를 r이라고 하면, (단, a > b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다. 이 성질에 따라 b를 r로 나눈 나머지 rr를 구하고, 다시 r을 rr로 나눈 나머지를 구하는 과정을 반복해 나머지가 0이 되었을 떄 나누는 수가 a와 b의 최대공약수이다. 

function solution(a, b) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return [gcd(a, b), lcm(a, b)]
}


console.log(solution(1, 2))
