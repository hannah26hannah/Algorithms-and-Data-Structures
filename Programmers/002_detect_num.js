/** Q 문자열 다루기 기본
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면   False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
 */


function solution(str) {
   const lenCon = (str.length === 4 || str.length === 6);
   let res = false;
   try {
       const arr = str.split('');
       
       if (lenCon) {
           res = arr.every(el => isFinite(+el));
       }
       return res;
   } 
   catch (e) {return res} 
}