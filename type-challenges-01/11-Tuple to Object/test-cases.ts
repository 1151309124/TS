/*
 * @Author: your name
 * @Date: 2022-04-25 00:00:02
 * @LastEditTime: 2022-04-26 10:20:55
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges-01\11-Tuple to Object\test-cases.ts
 */
// 1.字面量类型
import type { Equal, Expect } from '@type-challenges/utils'
// as const 不允许改变常量
const tuple = ['tesla', 'model 3', 'model X', 'model Y', 1] as const



type cases = [
    Expect<Equal<TupleToObject<typeof tuple>, {
        tesla: 'tesla';
        'model 3': 'model 3';
        'model X': 'model X';
        'model Y': 'model Y';
        1: 1
    }>>,
]

// 下面意思是遇到下面情况报错,不能传入对象类型
// @ts-expect-error  
type error = TupleToObject<[[1, 2], {}]>


// const let        js世界
// type interface   type世界

// 1.typeof
// 2.字面量类型