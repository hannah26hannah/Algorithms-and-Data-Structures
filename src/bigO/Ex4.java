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
/* j 루프 안에 있는 if 문은 상수 시간에 수행 가능한 단순한 문장이므로 O(1) 시간이라고 말할 수 있다.
 * 각각의 배열이 반복되는 횟수가 a, b라고 한다면 전체 수행 시간은 O(ab). 서로 다른 두 배열이므로 
 * 두 배열의 크기를 모두 고려해야 한다.
 * */
