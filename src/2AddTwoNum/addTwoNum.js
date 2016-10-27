/**
 * Created by lerry on 26/10/2016.
 */
"use strict";
var ListNode = require("../common/listNode")

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var lr = new ListNode(0);
    var p = lr;
    var l1Header = new ListNode(0);
    l1Header.next = l1;
    var l2Header = new ListNode(0);
    l2Header.next = l2;
    var carry = 0;
    var r = 0;
    while (l1Header.next !== null || l2Header.next !== null) {
        r = 0;
        if (l1Header.next !== null && l2Header.next !== null) {
            r = l1Header.next.val + l2Header.next.val;
            p.next = new ListNode((r + carry) % 10);
            l1Header = l1Header.next;
            l2Header = l2Header.next;
        } else if (l1Header.next !== null) {
            r = l1Header.next.val;
            p.next = new ListNode((r + carry) % 10);
            l1Header = l1Header.next;
        } else if (l2Header.next !== null) {
            r = l2Header.next.val;
            p.next = new ListNode((r+carry) % 10);
            l2Header = l2Header.next;
        }

        carry = parseInt((r + carry)/10, 10);
        p = p.next;
    }
    if (carry == 1) {
        p.next = new ListNode(carry);
    }
    return lr.next;
};

exports.addTwoNumbers = addTwoNumbers;

