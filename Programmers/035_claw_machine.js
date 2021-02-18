
// 크레인 인형 뽑기

function solution(board, moves) {
    let cnt = 0;
    let bucket = [];
    for (const move of moves) {
        const x = move - 1;
        const sizeOfBoard = board.length;

        for (let y = 0; y < sizeOfBoard; y++) {
            if (board[y][x] === 0) {
                continue;
            } else {
                bucket.push(board[y][x]);
                board[y][x] = 0;
                break;
            }
        }
        if (bucket.length > 1) {
            if (bucket[bucket.length - 1] === bucket[bucket.length - 2]) {
                bucket.splice(bucket.length - 2);
                cnt++;
            }
        }
    }
    return cnt*2;
}

