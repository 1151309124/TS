
/* 实现内置Readonly < T > 泛型而不使用它。

构造一个类型，将 T 的所有属性设置为只读，这意味着构造类型的属性不能重新分配。

例如
interface Todo {
    title: string
    description: string
}

const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property

 */


/* type User = {
    readonly name: string;
}

const xiaohong: User = {
    name: "xiaohong"
}
xiaohong.name = '123' */



// type MyReadonly<T> = any

type MyReadonly<T> = {
    //in =map   keyof 获取 key值  ：等于=
    readonly [P in keyof T]: T[P]
}


function readonly(obj) {
    const result = {}

    for (const key in obj) {
        result['readonly' + key] = obj[key]
    }
    return result
}


//  1.返回一个对象
//  2.遍历obj (js 对象 ts 接口)
//  3.加上readonly 关键字
//  4.通过 key 获取 obj(接口) 里面的值