/*
 * @Author: your name
 * @Date: 2022-04-22 18:08:57
 * @LastEditTime: 2022-04-25 00:02:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges\hello-world\test-cases.ts
 */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
    // 断言helloworld不是notany
    Expect<NotAny<HelloWorld>>,
    // 断言helloworld是string类型
    Expect<Equal<HelloWorld, string>>,
]