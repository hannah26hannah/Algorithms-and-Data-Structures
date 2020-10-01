package LinkedListEx;

import java.util.LinkedList;

public class LinkedListEx1 {
	public static void main(String[] args) {
		
		// Create a new linked list
		LinkedList<Integer> lst = new LinkedList<Integer>();
		
		// add elements
		lst.add(15);
		lst.add(19); // [15,19]
		lst.add(21);	// [15,19,21]
		lst.addFirst(13); // [13,15,19,21]
		lst.addLast(24); // [13,15,19,21,24]
		System.out.println(lst);
		
		// remove elements
		lst.removeFirst(); // [15,19,21,24]
		lst.removeLast(); // [15,19,21]
		lst.remove(19); // [15,21]
		System.out.println(lst);
	}
}
