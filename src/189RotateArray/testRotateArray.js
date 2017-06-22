/**
 * Created by lerry on 22/06/2017.
 */
"use strict";
var rotateArray = require('./RotateArray');
var assert = require('chai').assert;

describe("TestRotateArray", function () {
    describe("Case1", function () {
        var nums = [1, 2];
        var n = 1;
        var result = [2, 1];
        rotateArray.RotateArray(nums, n);
        result.forEach(function (r, i) {
            it('result ' + nums[i] + ' should equal test ' + r, function () {
                assert.equal(nums[i], r);
            });
        });
    });
    describe("Case2", function () {
        var nums = [1, 2, 3];
        var n = 1;
        var result = [3, 1, 2];
        rotateArray.RotateArray(nums, n);
        result.forEach(function (r, i) {
            it('result ' + nums[i] + ' should equal test ' + r, function () {
                assert.equal(nums[i], r);
            });
        });
    });
});