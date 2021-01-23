public class detectNum {
    public boolean solution(String s) {
        boolean answer = false;
        int len = s.length();
        try {
            if (len == 4 || len == 6) {
                Integer.parseInt(s);
                answer = true;
            }
        } catch (NumberFormatException e) {
            return answer;
        }
        return answer;
    }
}