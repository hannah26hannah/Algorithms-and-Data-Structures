 
function solution(nums) {
    const size = nums.length / 2;
    const sizeOfSet = (new Set(nums)).size;
    
    return sizeOfSet > size ? size : sizeOfSet
}