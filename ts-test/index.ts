let a:(number | string)[] = [];
// 枚举
enum PAGE {
    DETAIL="DETAIL",
    CHANNEL="CHANNEL",
    RESULT="RESULT"
}

// 接口
// 可选属性,任意属性
// 同名时会合并,也就是同名下所有的属性会合并成一个
// 接口继承多个  extends A,B
interface A {
    name: string
}
interface A {
    age: number
}
//A会被合并成{name:string,age:number}
interface B extends A {

}
interface Item {
    name: string
    age: number
    // 可选属性
    type?:string
    // 任意属性
    // [key:string]:any
}
interface DetailInfo {
    list: Item[]
    time: string
    data: string
}


// type可以作为一个多个类型的别名,方便复用
type MyDetailType = DetailInfo | Item

// 泛型 用于规范一些未定义的类型,多种泛型可以用逗号隔开
// 泛型用extends 可以做三元判断
function test<T,U,K>(params:T | U):T | U | K {
    return params
}
type MYFAN<T> = T extends number ? number : string
type MYFAN1 = MYFAN<1>
type MYFAN2 = MYFAN<'1'>
let b:MYFAN1 = 1;

// Pick Omit
type myPick = Pick<DetailInfo,'list'|'time'>
// type myPick = {
//     list: Item[];
// }
type myPice = Omit<DetailInfo,'list'|'time'>
// type myPice = {
//     time: string;
// }

// 断言
type aa = string | number;
let aas:aa = '123';
(aas as string).length

let bb:Item = {
    name:'111',
    age:123,
};
bb.type = '123123'

interface Person {
    name: string
    age: number
}
class xiaoming implements Person {
    name = '1';
    age = 11;
}

// 定义一个异步
interface mydata {
    data: Person
}
interface mm<T> extends mydata{
    uu: T
}
type b = mm<string>;
function myrequest<T>(params:T):Promise<mydata|T> {
    return new Promise((res,rej) => {
        let mydatas:mydata = {
            data: {
                name: '123',
                age:121
            }
        }
        if(typeof params === 'string'){
            res(mydatas)
        }else{
            res(params)
        }
    })
}
myrequest(null);