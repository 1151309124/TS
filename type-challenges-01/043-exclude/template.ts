/*
 * @Author: your name
 * @Date: 2022-04-25 20:11:31
 * @LastEditTime: 2022-04-25 21:00:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges-01\043-exclude\template.ts
 */
/* 实现内置的 Exclude<T, U>

从 T 中排除那些可分配给 U 的类型 */


// type MyExclude<T, U> = any

// extends进行循环
// a与a比较，b与a比较，c与a比较  a与b比较，b与b比较，c与b比较
type MyExclude<T, U> = T extends U?never:T

// 测试
 type t2= 'a'|'b'|'c'
 type t3= 'a'
 type t1 = MyExclude<t2,t3>


// ['a','b','c']
// ['a','b']
function myExclude(T, U:any[]) {
    const result = []
    for (let i = 0; i < T.length; i++) {
        const t = T[i]
        // for (let j = 0; j < U.length; j++) {
        //     const u = U[j]
        //     // if (t !== u) {
        //     //     result.push(t)
        //     // }
        // }
        if (!U.includes(t)) {
            result.push(t)
        }
    }
    return result
}