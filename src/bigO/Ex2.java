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
/* 위 코드의 시간 복잡도는 O(N^2) : 안쪽 루프의 반복 횟수가 O(N)이고, 이 루프가 N번 반복된다. 
 * 위 코드가 무엇을 의미하는지 살펴봄으로써 시간 복잡도를 구할 수도 있다. 위 코드는 모두 일련의 두 원소 즉 모든 쌍을 출력하는 코드이다.
 * 두 원소의 쌍은 모두 O(N^2)이므로, 수행 시간은 O(N^2)이 된다. */
 