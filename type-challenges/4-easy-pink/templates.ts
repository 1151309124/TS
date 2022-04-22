/*
 * @Author: your name
 * @Date: 2022-04-22 23:06:18
 * @LastEditTime: 2022-04-23 00:11:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges\4-easy-pink\templates.ts
 */
//  ts 联合类型 union
type MyPick<T, K extends keyof T> = {

    [P in K]: T[P]
}

function mypick(todo, keys) {
    const obj = {};

    keys.forEach((key) => {
        if (key in todo) {
            obj[key] = todo[key]
        }
    })
    return obj
}

// 1.返回一个对象
// 2.遍历forEach
// 3.todo[key]取值
// 4.看看key在不在todo里面