// 제일 작은 수 제거하기 

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// Tip : 기존 배열을 sort 할 경우 원래대로 되돌려서 반환해야 한다. 즉, 기존 배열의 인덱스 순서를 무시하고, 내림차순 해 반환하는 것이 아니다. 

function solution(arr) {
    
    const min = arr.reduce((prev, curr) => {
     return prev > curr ? curr : prev // 최솟값   
    })
    const i = arr.indexOf(min); // 최솟값의 인덱스
    arr.splice(i, 1);
    
    if (arr.length === 0) arr.push(-1);
    
    return arr;
}

// rest operator 사용하기. 
function solution (arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    // arr는 숫자를 원소로 하는 배열. Math.min 메서드는 배열이 아닌 숫자 자체를 인수로 받기 때문에 spread syntax를 이용해 배열 전체를 가지고 와 요소로 먼저 펼쳐 주어야 한다. 때문에 reduce() 메서드 등을 사용할 떄보다 더욱 코드 가독성을 높일 수 있다. 
    if (arr.length < 1) return [-1];
    return arr;
}