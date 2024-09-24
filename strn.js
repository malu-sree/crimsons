let str="I am a react developer and trainer";

str=str.split(' ');
console.log(str);
let long='';
for(let i=0;i<str.length;i++)
{
    if(str[i].length>long.length)
    {
        long=str[i]
    }
}
console.log(long)

