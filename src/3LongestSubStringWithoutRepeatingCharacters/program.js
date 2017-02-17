/**
 * Created by lerry on 15/11/2016.
 */
"use strict";
/**
 * @param {string} s
 * @return {string}
 */
var lengthOfLongestSubstring = function(s) {
    var stack = [];
    var stackMap = {};
    var flag = 0;
    stack = s[0];
    stackMap[s[0]] = s[0];
    for(var i = 1; i < s.length; i++) {
        if(stackMap[s[i]] !== null){
            
        }
    }
};
