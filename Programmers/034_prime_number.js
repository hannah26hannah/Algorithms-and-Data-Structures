// 에라토스테네스의 체 

function solution(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    
    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0) continue;
        for (let j = i+i; j <= n; j += i) {
            arr[j] = 0;
        }
    }
    
    return arr.filter(el => el !== 0).length;
    
}

function solution2 (n) {
    // let s = [...Array(n).keys()]
    // let s = [...Array(10).keys()].map(el => ++el);
    let s = Array.from(Array(10), (e, i) => ++i) 
    console.log(s)
}

solution2(10);