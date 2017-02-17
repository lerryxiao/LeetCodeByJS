/**
 * Created by lerry on 27/10/2016.
 */
"use strict";
var ListNode = require("../common/listNode");
var addTowNum = require("./addTwoNum");
var assert = require('chai').assert;

function makeLink(arrDig) {
    var lHeader = new ListNode(0);
    var p = lHeader;
    for (var i = 0; i < arrDig.length; i++) {
        p.next = new ListNode(arrDig[i]);
        p = p.next;
    }
    return lHeader.next;
}

function generalResult(l) {
    var lh = new ListNode(0);
    lh.next = l;
    var arr = [];
    while (lh.next !== null) {
        arr.push(lh.next.val);
        lh = lh.next;
    }
    return arr;
}

function makeResult(arr1, arr2) {
    var len = arr1.length;
    if (arr1.length < arr2.length) {
        len = arr2.length;
    }
    var carry = 0;
    var result = [];
    var r =0;
    for (var i = 0; i < len; i++) {
        r = 0;
        if (i < arr1.length && i < arr2.length) {
            r = arr1[i] + arr2[i];
            result.push((r + carry) % 10);
        } else if (i < arr1.length) {
            r = arr1[i];
            result.push((arr1[i] + carry) % 10);
        } else if (i < arr2.length) {
            r = arr2[i];
            result.push((arr2[i] + carry) % 10);
        }
        carry = parseInt((r + carry) / 10, 10);
    }
    if (carry == 1)  {
        result.push(1);
    }
    return result;
}


describe('AddTowNumbersByLink', function () {
    describe('TestCase1', function () {
        var arr1 = [2, 4, 3];
        var arr2 = [5, 6, 4];
        var l1 = makeLink(arr1);
        var l2 = makeLink(arr2);
        var tests = makeResult(arr1, arr2)
        var resL = addTowNum.addTwoNumbers(l1, l2);
        var res = generalResult(resL);
        tests.forEach(function (test, i) {
            it('result ' + res[i] + ' should equal test ' + test, function () {
                assert.equal(res[i], test);
            });
        });
    });
    describe('TestCase2', function () {
        var arr1 = [1, 9, 9];
        var arr2 = [9, 2, 2];
        var l1 = makeLink(arr1);
        var l2 = makeLink(arr2);
        var tests = makeResult(arr1, arr2)
        var resL = addTowNum.addTwoNumbers(l1, l2);
        var res = generalResult(resL);
        tests.forEach(function (test, i) {
            it('result ' + res[i] + ' should equal test ' + test, function () {
                assert.equal(res[i], test);
            });
        });
    });
    describe('TestCase3', function () {
        var arr1 = [9, 8];
        var arr2 = [1];
        var l1 = makeLink(arr1);
        var l2 = makeLink(arr2);
        var tests = makeResult(arr1, arr2)
        var resL = addTowNum.addTwoNumbers(l1, l2);
        var res = generalResult(resL);
        tests.forEach(function (test, i) {
            it('result ' + res[i] + ' should equal test ' + test, function () {
                assert.equal(res[i], test);
            });
        });
    });
    describe('TestCase4', function () {
        var arr1 = [0];
        var arr2 = [7, 3];
        var l1 = makeLink(arr1);
        var l2 = makeLink(arr2);
        var tests = makeResult(arr1, arr2)
        var resL = addTowNum.addTwoNumbers(l1, l2);
        var res = generalResult(resL);
        tests.forEach(function (test, i) {
            it('result ' + res[i] + ' should equal test ' + test, function () {
                assert.equal(res[i], test);
            });
        });
    });
});


