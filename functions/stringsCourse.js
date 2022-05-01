/** use single quotes 
 * Strings should not be written across multiple lines using string concatenation when length is max . for cleanliness
 * use template string functions
*/
// good
function sayHi(name) {
    return `How are you, ${name}?`;
}

/**
 * Never use eval() on a string, it opens too many vulnerabilities
 * Do not unnecessarily escape characters in strings
 * 
 */
// bad
//const foo = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"'

console.log(sayHi('suresh'), foo)

/**
 * Use named function expressions instead of function declarations
 */
//bad
//function foo(){}
//const foo = function(){}

//good
const food = function solveFood(){}

/**
 * Never declare a function in a non-function block (if, while, etc)
 */

if(currentUser){
    function test(){
        console.log('nope! not you')
    }
}

//good
var currentUser;
let test;
if(currentUser){
    test = () => {
        consolelog('yes ! right')
    }
}

/**
 * data stored in a variable can be two types. primitive vs referenced
 * 6 primitive types - undefined, null, boolean, string, number, symbol
 * 3 reference types - objects, arrays, functions
 * - all primitive are immutable
 * -
 * 
 */
// two seperate atomic values 
let name1 = 'suresh'
let name2 = name1

console.log(name1, name2)
name2 = 'Jon'
console.log(name1, name2)
//reference variables - mutable

let person1 = {
    name: 'jon',
    age: 20,
    group: 'D'
}

let person2 = person1

console.log(person1, person2)

person1.name = 'Sam'
console.log(person1, person2)


/**
 * Use default parameter syntax rather than mutating function arguments.Avoid side effects with default parameters.
 * Always put default parameters last
 */
function handleVarious( name, opts={}) //not the otherway around


/**
 * never mutate parameters
 * Never reassign parameters
 */

// good
function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
  }


// good
function f3(a) {
    const b = a || 1;
    // ...
}

/**
 * When you must use an anonymous function (as when passing an inline callback), use arrow function notation
 * 
 */

//bad
//[1, 2, 3].map(funtion (x) => {

// good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });

  /**
   * If the function body consists of a single statement returning an expression without side effects, omit the braces and use the implicit return
   * In case the expression spans over multiple lines, wrap it in parentheses for better readability.
   * 
   */

  