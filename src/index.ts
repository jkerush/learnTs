import axios from 'axios'


let sty: string = "Studing the TypeScript now...";
let app = document.querySelector("#app")
app.innerHTML = sty;
// 原始类型

let bool: boolean = true;
let num: number = 232;
let str: string = "this is String";

// 数组

let arr: number[] = [12, 23, 354, 256];
let arr2: Array<number | string> = [23, "sdk", 25, "slid", "8iesk"];

arr2.map(item => {
    console.log(item)
})


// 元祖

let tuple: [number, string] = [0, "jojo"];
tuple.push("lisa");
console.log(tuple);
// tuple[2]

// 函数

let func = (a: number, b: number) => a + b;
let sfunc: (a: string, b: number) => string = (x: string, y: number) =>
    `we have ${2 * y} ${x}`;
console.log(sfunc("joker", 2));

// 对象

let obj: { a: number; b: number } = {a: 3, b: 6};
obj.b = 9;
console.log(obj.a, obj.b);

// symbol
let sl1: symbol = Symbol();
let sl2 = Symbol();
console.log(sl1 === sl2);

// undefined null
let undif: undefined = undefined;
let nuls: null = null;

console.log(undif === nuls);

//void

let nore = (a: number, b: number): void => {
    console.log(a, b);
};

// any
let x;
x = 2;
x = null;
x = "kjik";

// never

let errors = (): never => {
    throw new Error();
};

// enum

enum surType {
    kokia = 1,
    kokis,
    kokim,
    kokil,
}

console.log(surType.kokia);
console.log(surType[1]);

enum strs {
    succ = "you did it",
    fail = "you miss it",
}

console.log(strs.succ);


// 接口和函数
interface imgObj {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string
}

axios.get("https://picsum.photos/v2/list?limit=10").then((r: any) => {
    console.log('result:', r)
    if (r.status === 200) {
        let imag_arcs: imgObj[] = r.data
        console.log('the images array is ', imag_arcs)
    }

})



