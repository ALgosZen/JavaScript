//prompt for input 
let yourName = prompt("what's your name")
console.log("hi " +yourName+ " ,pls follow along to view program outut " , '\n' )



/** ... Javascript primitives - act directly on its value
string
number
boolean
null
undefined
symbol
bigint
... */
const foo = "hello"
let bar = foo;
bar = 9
console.log(foo, bar)

/**
 * complex objects - When you access a complex type ,you work on a reference to its value.
 * Use const for all of your references; avoid using var!
 * var a = 1 is bad , const a = 1 is good
 * This ensures that you can’t reassign your references, which can *lead to bugs and difficult to comprehend code
 */

const obj2 = [1,2]
const bar2 = obj2
console.log("show: ", bar2[1], obj2[1])

/**
 * If you must reassign references, use let instead of var
 * Why? let is block-scoped rather than function-scoped like var
 */

// usage of let as follows
let count = 1;
if (true) {
  count += 1;
}
console.log("let value is",count)

/**
 * Note that both let and const are block-scoped, whereas var is function-scoped
 */

{
    let a = 1
    var b = 3
    const c = 4
}
//console.log(a) - reference error
console.log(b)
//console.log(c) - reference error

/**
 * use object method shorthand.
 * Use property value shorthand.
 * Group your shorthand properties at the beginning of your object declaration
 * Why? It’s easier to tell which properties are using the shorthand
 * 
 */

const atom = {
    value: 1,
    
// wrong usage
// addValue:  function(value){  return atom.value + value }

//following is the right usage
    addValue(value){
        return atom.value + value
    }

}

console.log("addValue is: ", atom.addValue(4))

/**
 * Do not call Object.prototype methods directly
 * Why? These methods may be shadowed by properties on the object in question
 *  consider { hasOwnProperty: false } - or, the object may be a null object (Object.create(null)).
 */
const fire = {
    works: 2
}
//bad
console.log(Object.hasOwnProperty(fire.works))
//good
console.log(Object.prototype.hasOwnProperty(fire.works)) 
//following is best
// cache the lookup once, in module scope.has is an npm package as shortcut for the Object.prototype.hasOwnProperty.call
const has = Object.prototype.hasOwnProperty; 




/**
 * prefer the object spread syntax over object.assign to shallow copy objects.
 */

//good as follows
const original = { a:1 , b:2 } 
const copy = { ...original, c:3 } //const copy = { a:1, b:2, c:3 }
const { a, ...noA } = copy // noA => { b:2, c:3}

//bad as follows
// very bad
const original2 = { a: 1, b: 2 };
const copy2 = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original3 = { a: 1, b: 2 };
const copy3 = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }




let d = new Date();
document.body.innerHTML = "<h2> Todays date is :" +d + "</h2>"

document.body.innerHTML += "<p> hello " +yourName+ "! look in console to run my code </p>"



/**
 * Be careful, as not all code encased in curly brackets will end without a semicolon. Objects are encased in curly brackets, and should end in a semicolon.
 */
const objName = {} ; //it is ok not to have semi-clon


const triangle2 = {
    type    : "right",
    angle   : 90,
    sides   : 3

}; // better to end with semi-colon
console.log(triangle2)

/** and finally not all code expected to end/not-end in semicolon after curly braces
 * better practice - use semicolon is a common convension to seperate each statement, regardless of new lines or not.
 */