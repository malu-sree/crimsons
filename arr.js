
// arrays are a collection of different datatypes.

let a=['a','b','c','d','e']
console.log(a.length)
a[a.length-1]='D'
console.log(a)
console.log(a[3])
a[a.length]='F'
console.log(a)
console.log(a[4])
console.log(a[5])

// push and pop//push adds an element
//pop deletes an elemnt ,both operation from end.
//console.log(a.push('z'))
//console.log(a.pop('e'))
console.log(a)

console.log(a.push('z'))
console.log(a)
console.log(a.pop('d'))
console.log(a)

//slice -> removes the elements from either start or end ,wherever we want,number start and end.
//splice ->  starts from a number and delete from that number to end
console.log("-------------------------")
console.log(a.slice(2,4))
console.log(a)
a=a.slice(3)
console.log(a)

console.log("-------------------------")

//console.log(a.splice(0,3,'q','s','t','r'))
//console.log(a)
console.log(a.splice(0, 4, 'q', 's', 't', ));
console.log(a);

let b =[1,2,3,5,5,6,7,8]
console.log(b.splice(0,2,11,23))
console.log(b)

console.log("--------------------------------------------------------------------------")


//shift -> removes the first element from the start of an array and return the length
 //unshift -> adds the first element from the start of an array and returns the length


console.log(b.shift(2))
console.log(b.shift())
console.log(b.shift(4))
console.log(b)
console.log("-------------------------")

console.log(b.unshift())
console.log(b)

console.log(b.unshift(1))
console.log(b)

console.log(b.unshift(4))
console.log(b)
console.log("--------------------------------------------------------------------------")

//array.from() -> creates an array from a string
let c="Sreelakshmi"
d=Array.from(c)
console.log(d)
console.log("--------------------------------------------------------------------------")

//array.keys() -> returns iterator with keys of an array

let arr=[1,3,5,7,9,11,13]
let e=arr.keys()
for(let f of e)
{
     console.log(f)
}

console.log("-------------------------")


let fruits =['Banana','Apple','Orange','Mango']
let iterator = fruits.keys()
 for(let key of iterator){
   console.log(key)
 }









