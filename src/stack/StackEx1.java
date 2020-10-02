package stack;

import java.util.Stack;

public class StackEx1 {
	public static void main(String[] args) {
		Stack<Integer> stack = new Stack<Integer>();
		stack.push(new Integer(3)); // [3]
		stack.push(new Integer(5)); // [3, 5]
		System.out.println(stack.peek()); // prints 5
		
		stack.push(new Integer(6)); // [3, 5, 6]
		int x = stack.pop(); 
		System.out.println(x); // prints 6
		System.out.println(stack); // [3, 5]
	     
	}
}
