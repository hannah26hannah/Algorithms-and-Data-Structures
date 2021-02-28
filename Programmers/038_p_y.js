// 문자열 내의 p와 y의 개수

function solution(str){
   
    let status = false;
    
    if (str.match(/[p|y]/gi) === null) {
        status = true
    } else {

        const p = str.match(/[p]/gi) == null ? 0 : str.match(/[p]/gi).length;
        const y = str.match(/[y]/gi) == null ? 0 : str.match(/[y]/gi).length;

        status = (p !== y ? false : true)
    }
    return status;
};

// console.log(solution('Pyy'));



/** 문자열을 소문자나 대문자로 한 번 바꾼 상태에서 P/p, Y/y의 개수를 구한다. split 메서드는 구분자를 인자로 받기 때문에, 구분자만큼의 원소가 생기게 되는 원리를 이용한다.  */

function solution2 (str) {
    return str.toUpperCase().split("P").length === str.toLowerCase().split("Y").length;
}

console.log(solution2('pPoooyY'));