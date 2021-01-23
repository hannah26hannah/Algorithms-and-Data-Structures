// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution

function solution(s) {
    let answer = 0;
    
    // if (s.indexOf('+', 0) !== -1 || s.indexOf('-', 0) !== -1) { // 문자열 첫 번째 자리에 부호가 붙는 경우 --> 이 코드를 아래처럼 줄임.
    if ((s.indexOf('+') || s.indexOf('-')) !== -1) {
        const num_str = s.substr(1);
        if (s.indexOf('+') !== -1) { // 양의 부호가 붙은 경우
            answer = parseInt(num_str); // 숫자를 10진수로 형변환
        } else { // 음의 부호가 붙는 경우
            answer = num_str * (-1); // 음수를 곱해 10진수로 자동 형변환    
        }   
    } else {
        answer = parseInt(s); // 입력값을 그대로 숫자로 바꿔준다.
    }
    return answer;
}