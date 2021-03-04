// Hash, 완주하지 못한 선수

function solution (P, C) {
    C.map(c => {
        if (P.indexOf(c) > -1) P.splice(P.indexOf(c), 1);
    })
    // for (const c of C) {
    //     if (P.indexOf(c) > -1) P.splice(P.indexOf(c), 1);  
    // }
    return P.toString();
}

// 위 두 방법 모두 효율성 테스트에서 fail



// console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))

function solution2 (P, C) {
    const p = P.sort();
    const c = C.sort();
    for (let i = 0; i < p.length; i++) {
        if (p[i] !== c[i]) return p[i].toString();
    }
    // for (let i in ㅖ) {
    //     if(P[i] !== C[i]) return P[i];
    // }
}

console.log(solution2(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]));

// 위 풀이는 효율성 테스트를 통과함.