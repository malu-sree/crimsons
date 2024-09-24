function rev(x)
{
    let rev=0
    let temp=0
   while(x>0)
  {
    temp=x%10
    rev=(rev*10)+temp
    x=parseInt(x/10)
}
    return rev
}

console.log(rev(32243))

console.log("---------------------------------------")

function capital(str)
{
      let str2=""
      str2+=str[0].toUpperCase();
      for(let i=1;i<str.length;i++)
      {
          if(str[i]==" ")
          {
            str2+=" "
            str2+= str[i+1].toUpperCase();
            i++
          }
          else
          {
            str2+= str[i]
          }
      }

      console.log(str2)  
      
}
capital("the quick brown fox")

console.log("---------------------------------------")


function prime(a,divisor)
{
    let count=0;
    if(a<2)
       return false
    while(divisor<a)
    {
        if(a%divisor==0)
        {
            count+=1
        }
        divisor+=1
    }
    if(count>0)
    {
        return (`${a} is not a prime`)
    }
    else
    {
        return (`${a} is prime`)
    }
    
}
 console.log(prime(37,2));
