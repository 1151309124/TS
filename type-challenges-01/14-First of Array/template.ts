/*
 * @Author: your name
 * @Date: 2022-04-25 13:18:02
 * @LastEditTime: 2022-04-25 13:48:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges\14-First of Array\template.ts
 */
/* 实现一个泛型First<T>，它接受一个数组T并返回它的第一个元素的类型。

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3 */

//  type First<T extends any[]> = any

// 1.extends 类型条件判断
//----------------------------------------------/
// type First<T extends any[]> = T extends [] ? never : T[0]

// const first = (arr) => {
//     //arr是不是空数组 如果是 返回never
//     return arr[0]
// }



// 2.获取tuple 的 length 属性  indexed
//----------------------------------------------/
// type First<T extends any[]> = T['length'] extends 0? never : T[0]
// const first = (arr) => {
//     //arr是不是空数组 如果是 返回never
//     if(arr.length===0)return 'never'
//     return arr[0]
// }


// 3.extends union 判断的规则
// // T[number]
// type ages= [1,2,3]
// // union
// type t1= ages[number]//3|1|2

// //看看某个值是不是在union里面
// // 1 extends 1  ,1 extends 2 ,1 extends 3 
//----------------------------------------------/
// type t2= 1 extends ages[number]?'true':'false'//true

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never


// 4.inter的使用  解构
//----------------------------------------------/
type First<T extends any[]> = T extends [infer First,... infer Rest]?First:never
// const first = (arr) => {
//     //arr是不是空数组 如果是 返回never
//     const [First,...rest] =arr
//     return first ?first:'never'
// }