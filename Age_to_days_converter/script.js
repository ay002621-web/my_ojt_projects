function convert(){
    let DOB=document.getElementById("dateofbirth").value;
    let [birthyear, birthmonth, birthday]=DOB.split("-")

    let currentdate=document.getElementById("currentdate").value;
    let [cyear, cmonth, cday]=currentdate.split("-");
    
    let dob=Number(birthday)
    let mob=Number(birthmonth)
    let yob=Number(birthyear)
    let cd=Number(cday)
    let cm=Number(cmonth)
    let cy=Number(cyear)

    let leapdays=0
    let bigMonths=0
    let smallMonths=0
    let febMonths=0
    let daysFromMonth=0
    let years=cy-yob-1
    
    if(dob<=29 && mob<=2 && yob%4===0){
        leapdays++
    }
    
    if(mob==1||mob==3||mob==5||mob==7||mob==8||mob==10||mob==12){
        daysFromMonth=31-dob
    }
    else if(mob==2){
        daysFromMonth=28-dob
    }
    else if(mob==4||mob==6||mob==9||mob==11){
        daysFromMonth=30-dob
    }
    
    for(i=mob+1; i<=12; i++){
        if(i==1||i==3||i==5||i==7||i==8||i==10||i==12){
            bigMonths++
        }
        else if(i==2){
            febMonths++
        }
        else if(i==4||i==6||i==9||i==11){
            smallMonths++
        }
    }
 
    for(y=yob+1; y<=cy; y++){
        if(y%4==0){
            leapdays++
        }
    }
   
    for(m=1; m<cm; m++){
        if(m==1||m==3||m==5||m==7||m==8||m==10||m==12){
            bigMonths++
        }
        if(m==2){
            febMonths++
        }
        if(m==4||m==6||m==9||m==11){
            smallMonths++
        }
    }

    totaldays=(leapdays)+(bigMonths*31)+(smallMonths*30)+(febMonths*28)+(years*365)+(cd)+(daysFromMonth)
    document.getElementById("result").innerText=`Your age in days = ${totaldays} days`;
}