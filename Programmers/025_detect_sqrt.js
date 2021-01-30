function solution(n) {
    let x = Math.sqrt(n);
    return Number.isInteger(x) ? Math.pow((x+1), 2) : -1
    // 정수인지 판단해주는 메서드 Number.isInteger();
    
}