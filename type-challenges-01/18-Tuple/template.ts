/*
 * @Author: your name
 * @Date: 2022-04-25 19:21:28
 * @LastEditTime: 2022-04-26 10:03:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges\18-Tuple\template.ts
 */
/* 对于给定的元组，您需要创建一个泛型Length，选择元组的长度

例如
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // 预期为 4
type spaceXLength = Length<spaceX> // 预期为 5 */


// type Length<T> = any


type Length<T extends  readonly any[]> = T['length']


function getlength(arr) {
    if (!Array.isArray(arr)) return;
    return arr.length
}

// 什么是Tuple类型
// 定死定长的数组类型
// tuple 和普通数组有什么区别
// 数组取出来是number类型,tuple取出来是具体数字
// 