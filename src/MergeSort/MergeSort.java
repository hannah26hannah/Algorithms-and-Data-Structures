package MergeSort;


	Static int[] MergeSort(int[] lst) { // sort할 array를 하나 받는다. 
    int n = lst.length; 
    int[] left;
    int[] right; // 좌, 우로 나눌 배열을 미리 초기화한다. 
    
    // create space for left and right subarrays
    if (n % 2 == 0) { // lst의 길이가 짝수인 경우
        left = new int[n/2];
        right = new int[n/2];
    } 
    else {  // lst의 길이가 홀수인 경우
        left = new int[n/2];
        right = new int[n/2+1];
    }
    
    // fill up left and right subarrays
    for (int i = 0; i < n; i++) {
        if (i < n/2) {
            left[i] = lst[i];
        }
        else {
            right[i-n/2] = lst[i];
        }
    }
    
    // recursively split and merge
    left = mergeSort(left);
    right = mergeSort(right);
    
    // merge
    return merge(left, right);
}

// the function for merging two sorted arrays
	static int[] merge(int[] left, int[] right) {
    
		// create space for the merged array
    int[] result = new int[left.length+right.length]; // 두 배열의 길이를 더한다. 
    
    // running indices * index의 복수
    int i = 0;
    int j = 0;
    int index = 0;
    
    // add until one subarray is deplete
			// (남아 있는 것이 충분하지 않을 정도로) 대폭 감소시키다[격감시키다]
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result[index++] = left[i++];
        {
        else {
            result[index++] = right[j++];
        }
    }
    
    // add every leftover element from the subarray 
    while (i < left.length) {
        result[index++] = left[i++];
    }
    
    // only one of these two while loops will be executed
    while (j < right.length) {
        result[index++] = right[j++];
    }
    
    return result;
}