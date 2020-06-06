/* compilation test */
console.log('hello world')


/* ESNext */
async function hola() {
    console.log('hello there!')
}


/* types */
let any;         // type: any by default
let str: string; // type: string
let num = 5;     // type: number by initialization


/* custom types */
type Vowel = 'A' | 'E' | 'I' | 'O' | 'U'
let vow: Vowel = 'A'

interface Person {
    name: string,
    email: string,
    [key: string]: any // support any key:val pair
}
let Bob: Person = { name: 'Bob', email: 'a@b.c' }


/* functions */
function pow(x: number, y: number): string {
    return Math.pow(x, y).toString()
}

function msg(text: string): void {
    console.log(text)
}