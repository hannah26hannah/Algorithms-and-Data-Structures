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
/* �� �ڵ��� ���� �ð���?
 * �ٱ� ������ N�� ����ǰ�, ���� ������ (N-1)/2, ���� ���� �ð��� O(N^2)�� �ȴ�. */