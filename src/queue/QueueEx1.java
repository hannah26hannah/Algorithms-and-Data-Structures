package queue;

import java.util.LinkedList;
import java.util.Queue;

public class QueueEx1 {
	public static void main(String[] args) {
		Queue queue = new LinkedList();
		queue.add(2); // [2]
		queue.add(4);  // [2, 4]
		System.out.println(queue.peek()); // prints 2
		queue.add(5); // [2, 4, 5]
		queue.poll();
		System.out.println(queue); // [4, 5]
	}
}
