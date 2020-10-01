package bigO;

public class Ex6 {
	void reverse(int[] array) {
		for (int i = 0; i < array.length / 2; i++) {
			int other = array.length - i - 1;
			int temp = array[i];
			array[i] = array[other];
			array[other] = temp;
		}
	}
}
// 위 알고리즘은 O(N) 시간에 동작한다. 배열의 절반만 본다고 해서, 즉 반복 횟수가 절반이라고 해서 big-O 시간에 영향을 주지는 않는다.