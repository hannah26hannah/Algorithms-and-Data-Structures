// 짝수와 홀수

// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

function solution (num) {
    return num % 2 === 0 ? "Even" : "Odd";
    // 또는 return num % 2 "Odd" : "Even"; 
}

// 0은 false이므로 아래같은 방식으로도 더 짧게 풀 수 있다. 
