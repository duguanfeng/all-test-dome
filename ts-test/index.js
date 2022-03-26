var a = [];
// 枚举
var PAGE;
(function (PAGE) {
    PAGE["DETAIL"] = "DETAIL";
    PAGE["CHANNEL"] = "CHANNEL";
    PAGE["RESULT"] = "RESULT";
})(PAGE || (PAGE = {}));
// 泛型 用于规范一些未定义的类型,多种泛型可以用逗号隔开
// 泛型用extends 可以做三元判断
function test(params) {
    return params;
}
var b;
// let b:MYFAN = <T>(params:T):T => {
//     return params
// }
