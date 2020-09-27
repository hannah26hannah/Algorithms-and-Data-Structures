package BinarySearch;

public class BinarySearch {
	public static boolean BinarySearch(int[] lst, int v, int low, int high) {
		if(low > high) {
			System.out.println("not found");
			return false;
		}
		int middle = (low + high) / 2;
		
		if(v == lst[middle]) {
			System.out.println("found it! It is at "+middle);
			return true;
		} else if(v > lst[middle]) {
			return BinarySearch(lst, v, middle+1, high);
		} else {
			return BinarySearch(lst, v, low, middle-1);
		}
	}
	
	public static void main(String[] args) {
		
	}

}
