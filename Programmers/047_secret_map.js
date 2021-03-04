// 비밀지도

function solution(n, arr1, arr2) {
    const map1 = getBase2(arr1);
    const map2 = getBase2(arr2);

    function getBase2 (arr) {
        return arr.map(val => {
            const base2 = val.toString(2); // toString(2)
            return base2.length < n ? base2.padStart(n, '0') : base2 // padStart
        })
    }

    return map1.map((row, i) => {
        let result = ""    
        row.split("").map((wall, j) => {
            if (parseInt(wall) + parseInt(map2[i][j]) >= 1) {
                result += '#'
            } else {
                result += ' '
            }
        })
        return result;
        
    })
    
}

console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]))
// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))

// 다른 풀이
 let arr = [];
    
    for (let i = 0; i < n; i++) {
        let wall = '';
        for (let j = 0; j < n; j++) {
            const sum = parseInt(map1[i][j]) + parseInt(map2[i][j]);
            
            wall += sum === 0 ? ' ' : '#';
        }
        arr.push(wall);
    }
    return arr;