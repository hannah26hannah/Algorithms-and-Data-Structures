function solution(words, n) {
  words.sort(function (prev, next) {
      
      const a = prev[n];
      const b = next[n];
      
      if (a === b) {
          return (prev > next) - (prev < next)
      } else {
          return (a > b) - (a < b)
      }
  })
    return words;
}
// true - false = 1
// false - true  = -1