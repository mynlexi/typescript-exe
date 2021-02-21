type A = 2 | 3 | 4 
type B = 1 | 2 | 3
type e = Exclude<A, B> | Exclude<B, A>

