// 완전 탐색 알고리즘, 모의고사

function solution(answers) {
    const length = answers.length;
    const students = ['12345', '21232425', '3311224455'];
    const studentsAnswers = students.map(student => ''.padEnd(length, student)); 

    function getScore(studentAnswer) { 
        let cnt = 0;
        for (let i = 0; i < length; i++) {
            if (parseInt(answers[i]) === parseInt(studentAnswer[i])) cnt++;
        }
        return cnt;
    }
    const result = studentsAnswers.map(studentAnswer => getScore(studentAnswer)) 
    const highScore = Math.max(...result); 

    
    return result.map((score, index) => { 
        if (score === highScore) return index + 1}).filter(el => el !== undefined); 
}

// %를 적절히 활용해서 padEnd 대신 기존 주어진 패턴만을 이용
function solution2 (answers) {
    let answer = [];
    const a1 = [1, 2, 3, 4, 5];
    const a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const s1 = answers.filter((a, i) => a === a1[i % a1.length]).length;
    const s2 = answers.filter((a, i) => a === a2[i % a2.length]).length;
    const s3 = answers.filter((a, i) => a === a3[i % a3.length]).length;

    const max = Math.max(s1, s2, s3);
    
    if (s1 === max) answer.push(1)
    if (s2 === max) answer.push(2)
    if (s3 === max) answer pusy(3)

    return answer
}

