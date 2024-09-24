let n1=10;
console.log(n1)
let n2=13;
console.log(n2)
let n=n1+n2;

while(n<=1000)
{
    console.log(n)

    n1=n2
    n2=n
    n=n1+n2;
}