/**
 * Created by lerry on 22/06/2017.
 */
"use strict";

var rotate2 = function (nums, k) {
    var numsSize = nums.length;
    if (k > numsSize) {
        k = k % numsSize;
    }

    if (k == 0 || k == numsSize) {
        return;
    }


}
