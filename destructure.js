//unpacking into variables
let stuObj={
    name:"Sreelakshmi",
    version:'20',
    skill:'English',
    marks:50,
    age:20
}
 console.log(stuObj.name)
 let {name='malu',skill,...other}=stuObj
 console.log(name)
 console.log(skill)
 console.log(other)

console.log("=======================================")
function getMsg({name,marks='70',address='kochi'}){//curly bracket is mandatory.// extract name, marks, and address properties from the object.
    console.log(`${name} is scored ${marks} in ${address}`) 


}
getMsg(stuObj)
console.log("=======================================")


console.log(...[1,2,3,4])
//spread syntax is used to expand elements of an iterable (like an array) into individual elements

console.log("=======================================")


function sum(value,...remain){
    console.log(value,remain)
}
sum(1,2,3,4,5,6,7,8,9,10)

//spread syntax is used to expand elements of an iterable (like an array) into individual elements
console.log("=======================================")
 let arr=[1,3,5,7]
 console.log(arr.splice(0,2,3,5))


console.log("=======================================")


function sum1(value1,value2){
    console.log(value1,value2)
}
sum1(1,2,3,4,5,6,7,8,9,10)




//any thing after (...) is error because it only at last


//function fun(a,...other,b){//SyntaxError: Rest parameter must be last formal parameter
   // console.log(a,other,b)
//}

