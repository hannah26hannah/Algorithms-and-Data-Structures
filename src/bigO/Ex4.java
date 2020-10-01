package bigO;

public class Ex4 {
	void printUnorderedPairs(int[] arrayA, int[] arrayB) {
		for (int i = 0; i < arrayA.length; i++) {
			for (int j = 0; j < arrayB.length; j++) {
				if(arrayA[i] < arrayB[j]) {
					System.out.println(arrayA[i]+","+arrayB[j]);
				}
			}
		}
	}
}
/* j ���� �ȿ� �ִ� if ���� ��� �ð��� ���� ������ �ܼ��� �����̹Ƿ� O(1) �ð��̶�� ���� �� �ִ�.
 * ������ �迭�� �ݺ��Ǵ� Ƚ���� a, b��� �Ѵٸ� ��ü ���� �ð��� O(ab). ���� �ٸ� �� �迭�̹Ƿ� 
 * �� �迭�� ũ�⸦ ��� ����ؾ� �Ѵ�.
 * */
