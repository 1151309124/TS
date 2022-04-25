/*
 * @Author: your name
 * @Date: 2022-04-25 20:11:45
 * @LastEditTime: 2022-04-25 20:16:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges-01\043-exclude\test.cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

// exclude是什么,剔除逗号右边相同字符
type t1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'> //'b' | 'c'

type cases = [
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
    Expect<Equal<MyExclude<string | number |
        (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]