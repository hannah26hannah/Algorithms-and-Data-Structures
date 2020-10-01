package bigO;

public class Ex3 {
	void printUnorderedPairs(int[] array) {
		for(int i = 0; i < array.length; i++) {
			for(int j = i+1; j < array.length; j++) {
				System.out.println(array[i] + ", " + array[j]);
			}
		}
	}
}
/* 위 코드의 수행 시간은?
 * 바깥 루프가 N번 수행되고, 안쪽 루프가 (N-1)/2, 따라서 수행 시간은 O(N^2)가 된다. */