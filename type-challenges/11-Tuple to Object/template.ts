/*
 * @Author: your name
 * @Date: 2022-04-24 23:59:53
 * @LastEditTime: 2022-04-25 00:22:52
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges\11-Tuple to Object\template.ts
 */
/* 给出一个数组，转换成一个对象类型，并且键/值必须在给定的数组中。

例如
const  tuple  =  [ 'tesla' ,  'model 3' ,  'model X' ,  'model Y' ]  as  const

type  result  =  TupleToObject < typeof  tuple >  
// 预期 { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'} */


   
type  TupleToObject < T  extends  readonly  any [ ] >  =  any