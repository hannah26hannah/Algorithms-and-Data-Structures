// dart game 두 번째 풀이


function getBonus(str) {
    switch (str) {
        case 'S':
            return 1
            break;
        case 'D':
            return 2;
            break;
        case 'T':
            return 3;
            break; 
        default:
            break;
    }
}

function solution (dartResult) {
    
    const reg = /\d+\w(\*|\#|)/g    
    const match = dartResult.match(reg);

    let score = [];
    for (let i = 0; i < match.length; i++) {
        score.push(+match[i].match(/\d{1,2}/g)[0]);
        const option = match[i].split(score[i])[1]

        for (let op of option) {
            if (getBonus(op) !== undefined) {
                score[i] = Math.pow(score[i], getBonus(op))
            } else {
                if (op === '*') {
                    score[i] *= 2
                    if (score[i-1]) {
                        score[i-1] *= 2
                    }
                } else {
                    score[i] *= (-1)
                }
            }
        }
    }
    return score.reduce((acc, curr) => acc + curr);
}


console.log(solution('1S2D*3T'))