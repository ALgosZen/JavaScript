/**use literal syntax */
const someArray = [];
//avoid- const someArray = new Array();

/**use push instead of assignment */
someArray.push('1')

/** use array spread to copy arrays instead of for looping */
const someArray2 = [...someArray];



/** use array spread for iterable objects like document.querySelectorAll 
 * also use array.from for copying array like objects
*/
const someConst = { 0: 'foo', 1: 'bar' , 2: 'buz', length: 3 }

//bad 
const someConst2 = Array.prototype.slice.call(someConst)

//good
 console.log( Array.from(someConst));

/**Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array
 *
 */

foo = [1,2,3]
bar = 1
// bad
foo = [...foo].map(Math.pow);
console.log(foo)
// good
foo = Array.from(foo, Math.pow);
console.log(foo)

/**Use return statements in array method callbacks. 
 * bad - no returned value means `acc` becomes undefined after the first iteration */

//good
foo.map((x) =>{
    const y = x+ 1;
    return x*y //make sure return 
})


// good
const someArray3 =[[0, 1], [2, 3], [4, 5]]
someArray3.reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    console.log(flatten)
    return flatten; //make sure return
  });

//good
const numbers = [12, 23, 45, 56]
function someFunc(total, numbers) {
    return total-numbers
}

document.getElementById('funcId').innerHTML = numbers.reduce(someFunc)


document.body.innerHTML = "<h2> original array :" +someArray + "</h2>"

document.body.innerHTML += "<h2> copy array " +someArray2+ " </h2>"


/** use object destructring  */
// best
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }

  cont arr = [ 1, 2, 3, 4 ]

  const first = arr[0]
  const last = arr[-1]

  const[first, last] = arr

  /** the end  */