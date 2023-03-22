/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;

    while(start <= end) {

        var middle = Math.floor((start+end)/2); // Compute middle of nums

        if(nums[middle] === target) { // If the target value is found, return
            return middle;
        }

        if(nums[middle] > target) { // Remove the RHS
            end = middle-1;
        }
        else if(nums[middle] < target) { // Remove the LHS
            start = middle+1;
        }
    }

    return start; // Since start is greater than end, end is the last element nums
};