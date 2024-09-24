 arr=['a','b','c','d','e']
delete arr[2]
console.log(arr)

let arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(2, 1);
console.log(arr);

// copywithin
 a =[1,2,3,4,5]
  a.copyWithin(3,4,5)
  console.log(a)
   a.copyWithin(-3,-2,-1) 
  console.log(a)

console.log("--")

    // flat
     b=[1,2,3, [4,5]] 
     b=[1,2,3, [4,5]]
      console.log(b.flat())
       b=[1,2,3,[4,5],[6,7]]
    
    console.log(b.flat(Infinity)) // remove all nested array
    
    console.log("------")
    
    //join
    
    c = [1,2,3,4]
    
    console.log(c.join()) // default
    
    console.log(c.join(' and '))
    
    console.log("-------")
    
// concat

b = [5,6,7]

console.log(a.concat(b))

console.log("--")

// find

a= [1,2,3,4,5] 
console.log(a.find(checkEven => checkEven%2 == 0)) 

console.log(a.filter(checkEven => checkEven%2==0))   

// array sort

// array reverse

let d=[11,22,5]


console.log(d.sort((d,b)=>d-b)) // acending order

console.log(d.sort((d,b)=>b-d)) // descending order

const fruit =["orange", "apple", "babana", "mango"]

console.log(fruit.reverse())

console.log(fruit.sort())

//console.log(fruit.reverse())

console.log(fruit.sort().reverse())

let e=[1,3,18,20]

let f =['a', 'b', 'c']
console.log(e.every((e) => e>18)) 
console.log(e.some((e) => e>18))

console.log(e.reduce((total, value) => total+value))

let index= f.indexOf('a')

console.log(index)

console.log(f.indexOf('b'))

console.log(e.indexOf(3))

let array1 =['a', 'b', 'c', 'd']

let array2 =['e', 'f','g', 'h']

console.log(...array1,...array2)

let numbers = [2,12,11,4,19,45,70]

console.log(numbers.sort((a,b) => a-b))

console.log(numbers.sort((a,b) => b-a))

let text ="abvdhjjk"

console.log(Array.from(text)) // string into array
//let number=[10,20,30,40]

let iterator =numbers.keys() //console.log(iterator) for(let key of iterator)


 
 console.log(iterator)
 for(let key of iterator)
 {
    console.log(key)
 }

console.log("---")
let arry1 =[2,6,8,6,4]

for(let i=0; i<arry1.length;i++)

{  console.log(arry1[i])}

console.log("-")

let i=0;

do {

console.log(arry1[i])

i++

}while(i<arry1.length)

console.log("---")

while(i<arry1.length)

{

    console.log(arry1[i])
    i++

}



console.log("----")

let arrynum = [45,7,80,64]

console.log(arrynum.filter((value) => value>18))

console.log("-")



/*function sum(...a)



let sum1 = 0;

for (let i of a)

{ sum1+=i; }
return sum1*/
function sum(...a) {
    let sum1 = 0;
    for (let i of a) {
      sum1 += i;
    }
    return sum1;
  }
  

/*let x = sum(1,2,3,4)

onsole.log(x)

console.log(".

")*/

