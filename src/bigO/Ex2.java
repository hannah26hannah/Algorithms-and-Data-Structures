package bigO;

public class Ex2 {
	void printPairs(int[] array) {
		for(int i = 0; i < array.length; i++) {
			for(int j = 0; j< array.length; j++) {
				System.out.println(array[i] + ", " + array[j]);
			}
		}
	}
}
/* �� �ڵ��� �ð� ���⵵�� O(N^2) : ���� ������ �ݺ� Ƚ���� O(N)�̰�, �� ������ N�� �ݺ��ȴ�. 
 * �� �ڵ尡 ������ �ǹ��ϴ��� ���캽���ν� �ð� ���⵵�� ���� ���� �ִ�. �� �ڵ�� ��� �Ϸ��� �� ���� �� ��� ���� ����ϴ� �ڵ��̴�.
 * �� ������ ���� ��� O(N^2)�̹Ƿ�, ���� �ð��� O(N^2)�� �ȴ�. */
 