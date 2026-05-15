let btns=document.querySelectorAll(".btn");
let container= document.querySelector(".container")
let turn=true;
let div=document.createElement("div");
div.setAttribute("id" , "resultMsg");
let heading=document.createElement("h1");
let para=document.createElement("p");
                
function reset(btn){
    btns.forEach((btn)=>{
    btn.innerText=''
    btn.disabled=false;
    return;    
    })
    container.removeChild(div);
}
btns.forEach((btn ) => {
    btn.addEventListener("click", ()=> {
       
        
        if(turn ){
        btn.innerText="O";
        turn=false;
        btn.style.color="red";
        btn.disabled=true;          
       }
        else if(!turn){
        btn.innerText="X";
        turn=true;
        btn.style.color="green";
        btn.disabled=true;     
      }
      checkWinnner();  
       
    })
})
let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function checkWinnner(){
    for(pattern of winPattern){
       let value1=btns[pattern[0]].innerText;
       let value2=btns[pattern[1]].innerText;
       let value3=btns[pattern[2]].innerText;

       if(value1!='' && value2!='' && value3!=''){
        if(value1===value2 && value2===value3){ 
            
            heading.innerText="YOU WON!!!" 
            para.innerText="Looks like you are a genius 🫡";    
            div.appendChild(heading);
            div.appendChild(para);   
            container.appendChild(div);  
            div.style.color="greenyellow"; 
            btns.forEach(btn=> {
            btn.disabled=true;
            })
            return;
            }   
        }  
    }
    if([...btns].every(btn => btn.innerText!='')){
            heading.innerText="DRAW!!!"
            para.innerText="Their is no Winner 😟"
            div.appendChild(heading);
            div.appendChild(para);           
            container.appendChild(div); 
            div.style.color="red"; 
            btns.forEach(btn=> {
            btn.disabled=true;
            })
    }
   
}