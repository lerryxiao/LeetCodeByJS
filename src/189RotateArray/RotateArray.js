/**
 * Created by lerry on 22/06/2017.
 */
"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    var numsSize = nums.length;
    if (k === 0 || k === numsSize) {
        return;
    }
    if (k > numsSize) {
        k = k % numsSize;
    }
    var i = 0;
    var temp = 0;
    k = numsSize - k;
    for (; k > 0; k--, numsSize--) {
        for ( i = k - 1; i < numsSize - 1; i++) {
            temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
        }
    }

};

exports.RotateArray = rotate;