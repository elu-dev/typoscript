/* compilation test */
console.log('hello world');
/* ESNext */
async function hola() {
    console.log('hello there!');
}
/* types */
let any; // type: any by default
let str; // type: string
let num = 5; // type: number by initialization
let vow = 'A';
let Bob = { name: 'Bob', email: 'a@b.c' };
/* functions */
function pow(x, y) {
    return Math.pow(x, y).toString();
}
function msg(text) {
    console.log(text);
}
