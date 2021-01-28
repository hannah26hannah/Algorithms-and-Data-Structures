function solution(n) {
    let s = "";
    for (let i = 1; i <= n; i++) {
        s+= (i % 2 !== 0 ? "수" : "박");
    }
    return s;
}