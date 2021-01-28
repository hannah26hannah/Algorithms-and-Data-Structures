function solution (N, stages) {
  
  let failRates = [];
  for (let i = 1; i <= N; i++) {
    const c_users = stages.filter(s => s >= i).length;
    const p_users = stages.filter(s => s == i).length;
    const failRate = p_users / c_users;
    
    failRates.push({ stage: i, rate: failRate});
  }
  failRates.sort(function (a, b) {
      if (a.rate < b.rate) {
          return 1;
      } else if (a.rate > b.rate) {
          return -1;
      } else {
          if (a.stage < b.stage) return 1;
      }
  })
  let arr = [];
  for (const item of failRates) {
      arr.push(item.stage);
  }
  return arr;
}

// 위 함수는 아래처럼 개선할 수 있다. 

// return failRate.sort((a, b) => {
//     if (a.rate < b.rate) return 1;
//     if (a.rate > b.rate) return -1;
//     a.stage - b.stage 
// }).map(entry => entry.stage)