let obj = {
    name:"adithya",
    marks : 80,
    lan : ["Tamil", "English" ,"Malayalam" ,"Kannada"] ,
    num : [45,5.12,16],
    isPassed : true
}

console.log(obj.lan.filter((a) => a.includes('a'))) // find the array element which contain letter a
console.log(obj.lan.filter((a) => a.includes('T'))) // find the array element which contain T

console.log(obj.lan.join(' ').toUpperCase().split(' ')) // convert the array element into upper case

console.log(obj.lan.join(' ').toLocaleLowerCase().split(' ')) // convert the array element in to lower case

console.log(obj.num.sort((a,b) => a-b)) // sort in acensing order
console.log(obj.num.sort((a,b) => b-a)) // sort in descending order

c = reverse(obj.lan);  // reverse the array string
function reverse(array)
{
    return array.map(reversestring);
}
function reversestring(str)
{
    return str.split('').reverse().join('')
}
console.log(c)

for( let i = 0; i<obj.lan.length; i++) // to print each charactor in array
{
    
    for(let j = 0; j< obj.lan[i].length; j++)
        console.log(obj.lan[i][j].split(''))
}

/*for(let i = 0; i< obj.lan.length; i++)
{  let c =''

    for(let j = 0; j<obj.lan[i].length; j++)
    {
        //console.log(obj.lan[i][j])
      c+=obj.lan[i][j]
}
//console.log(c.split(''))
let d = c.split('').reverse()
    console.log(d)
    if(c.split('') == d)
        console.log(c)



}*/

