package bigO;

public class Ex1 {
	void foo(int[] array) {
		int sum = 0;
		int product = 1;
		for (int i =0; i < array.length; i++) {
			sum += array[i];
			
		}
		for(int i = 0; i <array.length; i++) {
			product *= array[i];
		}
		System.out.println(sum+","+product);
	}
 }
/* 
 * 위 코드의 시간 복잡도는?
 * 첫 번째 for문이 종료된 후 두 번째 for문이 반복될 것이므로, O(A번째의 복잡도 + B번의 복잡도)
 * N = array.length라고 한다면, A번째의 복잡도 O(N+N) = O(2N) 하지만 상수항은 무시되므로, O(N)이다.*/  