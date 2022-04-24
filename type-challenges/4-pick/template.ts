/*
 * @Author: your name
 * @Date: 2022-04-24 20:12:31
 * @LastEditTime: 2022-04-24 20:48:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges\4-pick\template.ts
 */
/* 实现 TS 内置的 Pick<T, K>，但不可以使用它。

从类型 T 中选择出属性 K，构造成一个新的类型。

例如：

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
} */
// type MyPick<T, K> = any


// 联合类型 union
// 约束K一定在T中
// keyof 查看todo里所有key
//  k = [title,description]
// k 和 [title,description,completed] 依次对比,有一个为true通过
type MyPick<T, K extends keyof T> = {
    [P in K] : T[P]
}

function mypick(todo, keys) {
    const obj = {}
    keys.forEach(key => {
        if (key in todo) {
            obj[key] = todo[key]
        }
    })
    return obj
}

//  1.返回一个对象
//  2.遍历forEach   mapped
//  3.todo[key]取值   indexed
//  4.看 key 在不在 todo 里面
//      1.keyof lookup
//      2.extends 约束