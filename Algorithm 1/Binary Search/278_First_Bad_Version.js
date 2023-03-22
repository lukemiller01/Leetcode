/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var start = 0;
        var end = n;
        while(true) {
            var middle = Math.floor((start+end)/2); // Get middle variable

                        
            if(!isBadVersion(middle-1) && isBadVersion(middle)) {
                return middle; // If before middle isn't bad but middle is
            } // (Handles all use cases except below)

            if(!isBadVersion(middle) && isBadVersion(middle+1)) {
                return middle+1; // If middle isn't bad but the next one is
            } // (Handles last version being the bad version)

            if(isBadVersion(middle)) { // If middle is bad, cut RHS
                end = middle;
            }
            else if(!isBadVersion(middle)) { // If middle is good, cut LHS
                start = middle;
            }
        }
    };
};