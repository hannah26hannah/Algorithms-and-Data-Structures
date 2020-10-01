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
 * �� �ڵ��� �ð� ���⵵��?
 * ù ��° for���� ����� �� �� ��° for���� �ݺ��� ���̹Ƿ�, O(A��°�� ���⵵ + B���� ���⵵)
 * N = array.length��� �Ѵٸ�, A��°�� ���⵵ O(N+N) = O(2N) ������ ������� ���õǹǷ�, O(N)�̴�.*/  