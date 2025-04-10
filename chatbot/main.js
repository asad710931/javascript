









const $=(e)=>{return document.querySelector(e)}
for(key in responses){
    if(key.search('')){
        console.log(responses[key])
    }
}
const chatInit=()=>{
    input_data=$('.input').value
    let response;
    let userText=input_data.toLowerCase()
    for(key in responses){
        if(key===userText){
           response=responses[key];
           break;
        }else{
           response=responses['default']
        }
    }
   // chatBack=chatResponse(input_data)
    $('.chats').innerHTML+=`<div class="chat">
            <div class="user">
               <div class="head-box">
                    <i class="bi bi-person-circle" id="bi-person" style="font-size: 2rem"></i>
                    <label class="label" for="bi-person"> You</label> <br/>
               </div>
                 <span style="padding: 0px 15px;"> ${input_data}</span>
               </div>
            <div class="robot">
               <div class="head-box">
                    <i class="bi bi-robot" id="bi-robot" style="position:relative;font-size: 2.3rem;left:85%;"></i>
                    <label class="label" for="bi-robot" style="left:56%;">Bot</label> <br/>
                </div>           
                <span> ${response}</span>
            </div>
         </div>`
    $('.chatbox').scrollTop=$('.chatbox').scrollHeight;
    $('.input').value=''  
}

document.querySelector('.send').addEventListener('click',chatInit)
window.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        chatInit()
        $('.input').value=''
    }
})