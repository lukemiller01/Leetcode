/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var middle = Math.floor((nums.length-1)/2);
    let start = 0
    let end = nums.length-1

    while (middle <= nums.length) { // While index hasn't exceeded array length

        if (start > end) { // End of the array is found
            return -1;
        }

        var middle = Math.floor((start+end) / 2); // Compute middle

        if(nums[middle] === target) { // Found the element
            return middle;
        }

        if (nums[middle] > target) { // Search left (remove RHS)
            end = middle - 1;
        }
        else if(nums[middle] < target) { // Search right (remove LHS)
            start = middle + 1;
        }
    }
};