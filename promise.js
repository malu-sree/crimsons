function calcu(a,b,btn){
    return new Promise((res,rej)=>{
        let ans=0
        switch(btn){
            case '+':
               ans= a+b
                break;
            case '-':
               ans= a-b
               break;
            case '*':
                ans=a*b
                break;
            case '/':
                ans=a/b
                break;
            default:
                rej("not valid")
            

    
        }
        res(ans)

    })
    
}
calcu(10,20,'+').then(add=> {

 calcu(add,2,'*').then(mul=> {calcu(mul,2,'/').then(div=> {(console.log(div))

calcu(mul,add,'-').then(sub=>
    {console.log(sub)})
})
})
})
.catch(reject=>{console.log(reject)})



    
   