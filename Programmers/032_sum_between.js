function solution(a, b) {
    
    let an = 0;
    for (let i = (a < b ? a : b); i <= (b > a ? b : a); i++) {
        a===b ? an = a : an += i;
    }
    return an;
}

// Math.min() and Math.max()
function solution (a, b, an = 0){
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) an += i;
  return an;
}

//  가우스 덧셈
function solution (a, b) {
    return (a+b)*(Math.abs(b-a)+1)/2;
}
