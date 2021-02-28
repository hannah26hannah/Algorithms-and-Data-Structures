// caesar

function solution(str, n) {

    let newStr = '';
    function refine (max, min, unicode) {
        const num = unicode - max;
        newStr += String.fromCharCode(min + num - 1)
    }

    for (let s of str) {
        if (s === " ") { // s가 빈 공백일 경우
            newStr += " ";
            continue; 
        } 

        let encodedUnicode = s.charCodeAt(0) + n;
        const con1 = encodedUnicode > 122 || encodedUnicode < 97;
        const con2 = encodedUnicode > 90 || encodedUnicode < 65;

        if (/[a-z]/g.test(s) && con1) { // 소문자이면서 범위를 벗어난 경우
            refine(122, 97, encodedUnicode);
            continue;
        } else if (/[A-Z]/g.test(s) && con2) { // 대문자이면서 범위를 벗어난 경우 
            refine(90, 65, encodedUnicode);
            continue;
        } else {
            newStr += String.fromCharCode(encodedUnicode);
        }

    }
    return newStr;
}

console.log(solution("a B z", 4));