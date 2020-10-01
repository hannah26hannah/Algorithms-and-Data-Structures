package LinkedListEx;

import java.util.LinkedList;

public class LinkedListEx2 {
	public static void main(String[] args) {
		LinkedList<Integer> lst = new LinkedList();
		lst.add(3); // [3]
		lst.removeFirst(); // []
		lst.add(5); // [5]
		lst.add(7); // [5, 7]
		lst.addFirst(2); // [2, 5, 7]
		lst.removeLast(); // [2, 5]
		System.out.println(lst);
	}
}
