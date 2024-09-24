function delay(){
    return new Promise((res)=>{
        setTimeout(()=>
        res("valid"))
    })
}
async function getDelay()
{
    let result=await delay(4000);
    console.log('in Async',result)
}


getDelay()
console.log('==============================')
let delay1 = async() =>{
    try{
        let result= await delay(2000)
        let result1= await delay(result)
        let result2= await delay(result1)
        let result3= await delay(2000)
        console.log('in aync', result)






    }
    catch(err){
        console.log('in errorr',err)
    }


}
delay1()


console.log('==============================')


function calcu(a,b,btn){
    return new Promise((res, rej) => {
        let ans=0;
        switch(btn){
            case '+':
                ans=a+b
                break;
             case '-':
               ans=a-b
              break;


              case '*':
                ans=a*b
                break;
             case '/':
               ans=a/b
              break;
           


        }
        res(ans)
       
    })
}


async function getCal()
   
{
    let add=await calcu(10,20,'+')
    console.log(add)


    let mul= await calcu(add,2,'*')
    console.log(mul)


    let div= await calcu(mul,2,'/')
    console.log(div)
    let sub= await calcu(mul,add,'-')
    console.log(sub)


}
getCal()


console.log('==============================')


// Find the pairs of an array element which
// have an sum of the target value
// Input 1 - > [1, 2, 3, 4, 5, 6]
// Input 2 - > 9
// [[4,5], [6,3]]


let a=[1,2,3,4,5,6] 
let b=[]


for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]+a[j]==9){
            b.push([a[i],a[j]])
        }
           
   
         
    }
   


}
console.log(b)



