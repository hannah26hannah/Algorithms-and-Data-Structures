package stack;

import java.util.Stack;

public class StackEx2 {
	public static void main(String[] args) {
		// quiz 2 
	    Stack<Integer> stack = new Stack<Integer>();
	    stack.push(new Integer(11)); // [11]
	    stack.push(new Integer(13)); // [11, 13]
	    stack.push(new Integer(2)); // [11, 13, 2]
	    stack.peek(); // returns 2
	    System.out.println(stack); // [11, 13, 2]
	    stack.pop(); // returns 2
	    System.out.println(stack); // [11, 13]

	}
}
