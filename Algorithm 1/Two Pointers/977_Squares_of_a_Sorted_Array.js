/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // Trivial solution:
    // var newNums = nums.map(Math.abs).map(x => Math.pow(x,2));
    // return newNums.sort(function (a,b) {
    //     return a - b; // Ascending
    // });

    // Since array is already sorted, we can split it up by positive/negative.
    if(Math.max(...nums) < 0) { // Only negatives
        var negArray = nums.splice(0,nums.findIndex(n => n === Math.max(...nums))+1);
        var posArray = [];
    }
    else { // Only positives or positives/negatives
        var negArray = nums.splice(0,nums.findIndex(n => n >= 0));
        var posArray = nums.splice(nums.findIndex(n => n >= 0), nums.length);
    }

    console.log(negArray, posArray)

    negArray = negArray.map(Math.abs).map(x => Math.pow(x,2)).reverse();
    posArray = posArray.map(x => Math.pow(x,2));

    var current = 0;
    var result = [];
    var indexNeg = 0;
    var indexPos = 0;

    while (current < (negArray.length + posArray.length)) {
      let negValue = negArray[indexNeg];
      let posValue = posArray[indexPos];
      
      let negArrayEmpty = indexNeg >= negArray.length;
      let posArrayEmpty = indexPos >= posArray.length;

      // Only merge the negative value if:
        // The value exists and 
        // The positive array has been extracted fully OR the value in negArray is smaller
      
      // Next comes from negative array
      if (!negArrayEmpty && (posArrayEmpty || (negValue < posValue))) {
        result[current] = negValue; 
        indexNeg++;
      }
      else { // Next comes from positive array
        result[current] = posValue;
        indexPos++;
      }

      current++;
    }

    return result;
};