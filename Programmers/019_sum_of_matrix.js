//  행렬의 덧셈

function solution(arr1, arr2) {
    let a = [];
    for (let i = 0; i < arr1.length; i++) {
        let b = [];
        for (let j = 0; j < arr1[0].length; j++) {
            b.push(arr1[i][j] + arr2[i][j]);
        }
        a.push(b);
    }
    return a;
}

// map과 화살표 함수 사용하기

function sumMatrix(A, B) {
    return A.map((a, i) => {
        a.map((b, j) => {
            b + B[i][j]
        })
    })
}