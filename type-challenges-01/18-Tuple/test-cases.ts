
import type { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
    Expect<Equal<Length<typeof tesla>, 4>>,
    Expect<Equal<Length<typeof spaceX>, 5>>,
    // @ts-expect-error
    Length<5>,
    // @ts-expect-error
    Length<'hello world'>,
]





type stringNumberPair = [string,number]
type stringArr = string[]
type t3= stringArr['length']
// type t3 = string[]['length']
type t2=stringNumberPair['length']
const str:stringNumberPair = ['123',123]