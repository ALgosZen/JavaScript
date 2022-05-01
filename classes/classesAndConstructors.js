let name2 = 'check console for program output!'
console.log(name2)


document.body.innerHTML = "<h2>hello how are you! "+name2+"  <h2>"

/**
 * classes are template for creating objects or object instances
 * they encaptulate data with code to work on it later ..
 * classes in javascript are built on prototypes
 */

    class Car {
        constructor(name, year){
            this.name = name;
            this.year = year;
        }
    }
    let myCar1 = new Car("Ford", 2014);
    let myCar2 = new Car("Audi", 2019);
console.log(myCar1, myCar2)
console.log(new Car('honda', 2020))

/**
 * always use classes and avoid manipulating prototype directly
 * class syntax concise and is easier to reason about!
 * 
 */

// bad
// function Queue(contents = []) {
//     this.queue = [...contents];
//   }
//   Queue.prototype.pop = function () {
//     const value = this.queue[0];
//     this.queue.splice(0, 1);
//     return value;
//   };
  
  // good
  class Queue {
    constructor(contents = []) {
      this.queue = [...contents];
    }
    pop() {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    }
  }


  /**
 * use extends to inherit prototype functionality without breaking instance of! methods can use this for method chaining..
 * classes have default constructor. again explicit empty constructor is not necessary
 * 
 */
// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}

/**
 * do not use wildcard imports. always use modules import/export over any other non-standard approach.
 * do not export directly from an import
 * bundle imports from one package (i.e Only import from a path in one place)
 */
// good
import foo, { named1, named2 } from 'foo';

// bad imports below..
import foo from 'foo';
// … some other imports … //
import { named1, named2 } from 'foo';

/**
 * do not export mutable bindings
 */