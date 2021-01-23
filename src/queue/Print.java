package queue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Print {
    public int solution(int[] priorities, int location) {
        int answer = 0;
        int size = priorities.length;
        int[] arr = new int[size]; // priorities 만큼의 크기를 가진 새로운 배열을 생성. 새롭게 sorted한 요소들이 들어가게 될 것이다.
        
        // 반복문을 돌면서 가장 큰 숫자를 찾는다.

        Arrays.sort(priorities);
        int maxVal = priorities[size-1];
        
        
    }
}
