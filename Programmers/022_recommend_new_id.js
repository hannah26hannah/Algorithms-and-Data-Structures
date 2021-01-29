// 2021 kakao blind recruitment 신규 아이디 추천 문제

function solution(new_id) {
    let id = new_id.toLowerCase(); // 1
    id = id.replace(/[^a-z0-9\-_.]/g, ""); // 2
    id = id.replace(/[.]{2,}/g, "."); // 3

    if (id.length > 0) {
        if (id[0] === ".") id = id.substring(1) ; // *
        if (id[id.length - 1] === ".") id = id.slice(0, -1);
    } // 4
    
    if (id.length === 0) id = "a";
    
    if (id.length >= 16) {
        id = id.slice(0, 15);
        if (id[id.length - 1] === ".") id = id.slice(0, -1);
    }

    while(id.length < 3) {
        id += id[id.length - 1];
    }
    return id;
}

	
// 다른 풀이
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2 \w 라틴계열의 문자를 의미함. -을 위해 \ 쓰지 않아도 됨. 
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5 빈 문자열일 경우 a를 삽입
        .slice(0, 15).replace(/\.$/, ''); // 6 문자열 제한하기, 마지막 글자 dot 제거
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
