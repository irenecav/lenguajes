console.log("************** DELIVERABLE 01 *********************");
console.log("************** DELIVERABLE 01 *********************");
var arr1 = ["head", 2, 3, 4, "tail"];
var head = function (_a) {
    var first = _a[0];
    return first;
};
console.log(head(arr1));
/////////////////////////////
var tail = function (_a) {
    var first = _a[0], restOfArray = _a.slice(1);
    return restOfArray;
};
console.log(tail(arr1));
/////////////////////////
var init = function (arr) { return arr.slice(0, arr.length - 1); };
console.log(init(arr1));
//////////////////////////
var last = function (_a) {
    var arr = _a.slice(0);
    return arr.pop();
};
console.log(last(arr1));
