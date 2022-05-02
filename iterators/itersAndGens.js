let d = new Date()
document.body.innerHTML = "<h2>Todays date is "+d+"</h2>"

/**
 * immutable rule - how to enforce?
 * Use map() / every() / filter() / find() / findIndex() / reduce() / some() / ... to iterate over arrays, and Object.keys() / Object.values() / Object.entries() to produce arrays so you can iterate over objects.
 */

let nums = [2, 3, 4, 5, 6]

//find sum  - bad and not efficient code
let sum
for (let sum of nums){
    sum += nums;
}
console.log(sum)



