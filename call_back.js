function sum(a,b,c){
    if(typeof a!='number'|| typeof b!='number'){
        return c('type error') // callback function
    }


    return c(null /*indicating no error*/,a+b);
}
 


sum(2,3, (err,result)=>{
    if(err){
        console.log('in err',err); //f err is not null, it logs 'in err' followed by the error message.
    }
    else{
        console.log('Yes in result', result) //If err is null, it logs 'Yes in result' followed by the result.
    }
})






