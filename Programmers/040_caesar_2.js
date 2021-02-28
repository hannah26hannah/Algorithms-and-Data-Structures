// caesar 2

function solution(s, n) {
    
    return s.replace(/[a-z]/ig, c => [
        c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) %  26 + 1)
    ][1]);
}

/** 2진법으로 대문자의 코드는 1000001~1011010, 소문자는 1100001~1111010, 즉, 앞 2자리를 제외하고 동일. 앞 2자리를 통해 대소문자를 구분하고, 나머지 5자리로 알파벳을 구분한다. 
 * 
 * 뒤 남은 5자리의 수 (00001~11010)을 가지고 오기 위해 c % 32(100000). a가 1부터 시작하므로 나머지 계산을 위해 -1을 해 초기점을 0 (00000~11001)을 잡아준다. 그럼, 0~25의 숫자 중 하나가 나오고, 여기서 n만큼을 더해준 뒤 26으로 나머지 연산을 한 뒤 다시 아까 뺀 1을 더한다.
 * 
 */

function solution2(str, n) {
    let newStr = '';
    for (const s of str) {
        if (s === ' ') newStr += ' '
        else newStr += String.fromCharCode((s.charCodeAt(0) > 90) ? (s.charCodeAt(0) + n - 97) % 26 + 97 : (s.charCodeAt(0) + n - 65) % 26 + 65);
    }
    return newStr;
}
console.log(solution2('a B z', 4));


