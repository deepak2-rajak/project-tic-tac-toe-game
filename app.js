 let turnO=true;
 let boxes=document.querySelectorAll(".box");
 const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]];
 let msg=document.querySelector("#msg");
 let msgconatainer=document.querySelector(".msgcontainer");
 let resetbtn=document.querySelector("#reset");
 let newbtn=document.querySelector("#newgame");
 boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        //console.log("btn was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
 });
 const checkwinner=()=>{
    for(let patterns of winpattern){
       // console.log(patterns);
       //console.log(patterns[0],patterns[1],patterns[2]);
    //    console.log(boxes[patterns[0]].innerText,
    //     boxes[patterns[1]].innerText,
    //     boxes[patterns[2]].innerText
    //    );
    let post1val=boxes[patterns[0]].innerText;
    let post2val=boxes[patterns[1]].innerText;
    let post3val=boxes[patterns[2]].innerText;
    if(post1val != "" && post2val != "" && post3val != ""){
        if(post1val === post2val && post2val === post3val){
            console.log("winner",post1val);
            showwinner(post1val);

        }
    }
    }
    
 };
 const showwinner=(winner)=>{
msg.innerText=`congratulation you are winner ${winner}`;
msgconatainer.classList.remove("hide");
disablebox();

 }

 const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
 const resetgame=()=>{
    let turnO=true;
    enablebox();
    msgconatainer.classList.add("hide");
     
 }
 const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
 resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);