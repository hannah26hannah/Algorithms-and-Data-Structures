function solution(d, budget) {
  const arr = d.sort((a, b) => a - b);

  let cnt = 0, sum = 0;
  for (const arg of arr) {
    sum += arg;
    if (sum <= budget) cnt++
  }
 return cnt;
}