function solution (numbers, hand) {
    const position = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    };

    let currentL = '*', currentR = '#';
    let result = '';

    for (const num of numbers) {
        
        if (num % 3 === 1) {
            result += 'L';
            currentL = num;
        } else if (num % 3 === 0 && num !== 0) {
            result += 'R';
            currentR = num;
        } else {
            result += calDist(num, currentL, currentR, position, hand);
            result[result.length - 1] === 'L' ? currentL = num : currentR = num;
        } 
    }
    return result;
}

function calDist(num, currentL, currentR, pos, hand) {
    const X = 0, Y = 1;
    const leftDist = Math.abs(pos[currentL][X] - pos[num][X]) + Math.abs(pos[currentL][Y] - pos[num][Y]);
    const rightDist = Math.abs(pos[currentR][X] - pos[num][X]) + Math.abs(pos[currentR][Y] - pos[num][Y]);

    if (leftDist === rightDist) return hand === 'right' ? 'R' : 'L';
    return leftDist > rightDist ? 'R' : 'L'
}