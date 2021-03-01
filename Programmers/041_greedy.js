// 체육복, Greedy Algorithm
/**동적 프로그래밍 사용 시 지나치게 많은 일을 한다는 것에서 고안된 알고리즘. 
 * 최대한 많은 학생들이 체육 수업을 듣는다고 할 때의 최대학생 수를 구해야 한다. 
 * 탐욕법은 문제를 작은 단위로 쪼개고 반복적으로 진행하며 접근하는 방식에서 완전 탐색과 유사하다. 
 * 하지만 탐욕법은 그 안에서 가장 좋아보이는 선택을 취한다. 즉, 앞으로의 선택이나 최종 결과를 고려하지 않는다. 
 * 그러나 탐욕의 해가 반드시 최적의 해라는 보장은 없다. 
 * 
*/

function solution(n, lost, reserve) {    
    let students = Array(n).fill(1); // ES6
    for (let i = 1; i <= n; i++) {
        if (lost.indexOf(i) > -1) students[i-1] -= 1;
        if (reserve.indexOf(i) > -1) students[i-1] += 1;
    }
    
    for (let [index, curr] of students.entries()) {
       if (curr === 0 && students[index+1] > 1) {
           students[index]++;
           students[index+1]--;
       } 
       if (curr === 0 && students[index-1] > 1) {
           students[index]++;
           students[index-1]--;
       }
    }
    
    
    return students.filter(el => el >= 1).length;
    
}

console.log(solution(3, [3], [1]));
