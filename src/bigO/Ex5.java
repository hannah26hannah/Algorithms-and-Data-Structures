package bigO;

public class Ex5 {
	void printUnorderedPairs(int[] arrayA, int[] arrayB) {
		for (int i = 0; i < arrayA.length; i++) {
			for (int j = 0; j < arrayB.length; j++) {
				for (int k = 0; k < 100000; k++) {
					System.out.println(arrayA[i]+","+arrayB[j]);
				}
			}
		}
	}
}
// 100000�� ������ ��������� ���ֵǱ� ������ ���� �ð��� O(ab)�� �ȴ�.