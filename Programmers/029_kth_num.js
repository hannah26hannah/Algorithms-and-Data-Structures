// k번째 수
function solution(array, commands) {
    const temp = [];
    for (const arg of commands) {
        temp.push(array.slice(arg[0] - 1, arg[1]).sort((a, b) => a - b)[arg[2] - 1]);
    }
    return temp;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

// Tip Array.slice()는 원본 배열에 영향을 주지 않고, 복사본을 새로운 배열로 반환한다. 반면 splice()는 원본 배열에 영향을 준다.

// map과 filter를 통한 답

function solution2 (array, commands) {
    return commands.map(command => {
        const [s, e, k] = command;
        const newArray = array
            .filter((value, i) => i >= s - 1 && i <= e -1)
            .sort((a, b) => a - b);
        return newArray[k - 1];
    })
}

console.log(solution2([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
