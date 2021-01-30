function solution2(numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                arr.push(numbers[i] + numbers[j]);
            }
        }
    }
    // new Set(arr) // 반복 가능한 객체가 전달된 경우 이 요소들이 모두 새로운 set에 추가된다. 
    return Array.from(new Set(arr)).sort((a, b) => a - b);
};

console.log(solution2([2, 1, 3, 4, 1]));