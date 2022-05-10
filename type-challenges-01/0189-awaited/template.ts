/*
 * @Author: your name
 * @Date: 2022-04-25 21:27:03
 * @LastEditTime: 2022-04-26 10:19:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges-01\0189-awaited\template.ts
 */
/* 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，
我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
41
比如：Promise<ExampleType>，请你返回 ExampleType 类型。
 */
// type MyAwaited = any

// 限制进来类型是promise                         
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
    ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
    : never


// infer
// 只能在条件类型使用
// 2.设置未知数，类似数学X
