/*try{
    //block of code
    //try will trigger first
    //if any error has been happen it will go to catch block
}
catch(error)
{
    //block of code
    //this block inly executes if any error happend in try blocks
}
finally{
    //block of code
    //this block is not mandatory
    //this block execute all the scenario


}*/
//try is not a stand alone .for try catch is manadatory
try{
    let a=0;
    let b=10;
    
    
        let c=b/d
    console.log(c)}
    catch(error){
        console.log("inside catch")
    }
    finally{
        console.log("inside finally")
    }
    
    
    console.log("-----------------------------------------")
    try{
        let a=10;
        let b=20;
        if(a>b)console.log('A is greater');
        if(b>a)console.log('B is greater');
    
    
    }
    catch(e){
        console.log("inside try")
    }finally
    {
      console.log("try ended")
    }
    
    
    console.log("-----------------------------------------")
    try {
        let b=[1,2,3,4,5,6]
        if(b[8]){
            console.log("inside if",b[8])
        }
        else
        {
            throw new Error("index out of range")
        }
           
    }catch(err){
        console.log("it is err:",err)
    }
    console.log("-----------------------------------------")
    function checkString(value){
        try{
            if(typeof value!= 'string') throw new Error ('it is not string')
        }
    catch(err){
       console.log("in errrorrr",err)
    }
    }
    checkString(1)
    console.log("-----------------------------------------")
    
    
    
    
    function week(n){
        try{
        let day=["sun","mon","tue","wed","thur","fri","sat"]
           if(n>0 && n<8)
            console.log(day[n-1])
           else
           throw new Error("it is incorrect")
        }
        catch(e){
            console.log("errorr:",e.message)
    
    
        }
    }
    week(0)
    
    
    
    