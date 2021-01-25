// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

class Solution {
    public String solution(String s) {

        int m = (int) Math.floor(s.length() / 2);
        return s.length() % 2 == 0 ? s.substring(m - 1, m + 1) : String.valueOf(s.charAt(m));

        // return s.substring((s.length()-1) / 2, s.length()/2 + 1);
    }
}