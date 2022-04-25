/*
 * @Author: your name
 * @Date: 2022-04-24 23:59:53
 * @LastEditTime: 2022-04-25 13:26:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges\11-Tuple to Object\template.ts
 */
/*
 * @Author: your name
 * @Date: 2022-04-24 23:59:53
 * @LastEditTime: 2022-04-25 13:07:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹e:\vs CODE\TS-practice\type-challenges\11-Tuple to Object\template.ts
 */
/* 给出一个数组，转换成一个对象类型，并且键/值必须在给定的数组中。

例如
const  tuple  =  [ 'tesla' ,  'model 3' ,  'model X' ,  'model Y' ]  as  const

type  result  =  TupleToObject < typeof  tuple >  
// 预期 { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'} */



// type  TupleToObject < T  extends  readonly  any [ ] >  =  any
type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    [P in T[number]]:P;
}


function tupleToObject(array) {

    // array 里面的key不是number string symbol        报错  error
    const obj = {}
    array.forEach(val => {
        obj[val] = val;
    });
    return obj
}

// 1.返回一个对象
// 2.遍历array   T[number]