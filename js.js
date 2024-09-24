function cap(str) {
    
    str = str.split(' ');

   
    for (let i = 0; i < str.length; i++) {
        
        str[i]= str[i].charAt(0).toUpperCase()+str[i].slice(1) 

    }

    str=str.join(" ")

    console.log(str);
}

cap( 'the quick brown fox');


