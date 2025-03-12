const $=(e)=>{return document.querySelector(e)}

let width=400,height=0,filter='',streaming=false;

const video=$('.vid');
let canvas=$('.cvs');





navigator.mediaDevices.getUserMedia({video:true,audio:false})
.then((stream)=>{
    video.srcObject=stream;
    video.play();
    console.log(filter)
    
}).catch(error=>{
    console.log(error);
});
video.addEventListener('canplay',()=>{
    height=video.videoHeight/(video.videoWidth/width)
    console.log(video.videoHeight);
    if(!streaming){
        video.setAttribute("width",width);
        video.setAttribute("height",height);
       
        canvas.setAttribute("width",width);
        canvas.setAttribute("height",height);
        streaming=true;
    }
    
},false);

$('.filters').addEventListener('change',(e)=>{
    filter=e.target.value;
    video.style.filter=filter;
})
$('.clear').addEventListener('click',()=>{
    filter='none';
    $('.filters').selectedIndex=0;
    video.style.filter=filter;
    $('.imgs').innerHTML="";
    document.querySelector('input[name="grayscale"]').value=50;
    document.querySelector('input[name="sepia"]').value=50;
    document.querySelector('input[name="contrast"]').value=100;
})


let grabed=false;
window.addEventListener('mousedown',()=>{grabed=true});
window.addEventListener('mouseup',()=>{grabed=false});

//controlling with slider contrast
$('#contrast').addEventListener('mousemove',(e)=>{
    if(grabed!=true){
     return;
    }
    //console.log(e.target.value)
    filter=`contrast(${e.target.value}%)`
    video.style.filter=filter;
    
    console.log(filter) 
 })

//controlling with slider grayscale
$('#grayscale').addEventListener('mousemove',(e)=>{
    if(grabed!=true){
     return;
    }
    console.log(e.target.value)
    video.style.filter=`grayscale(${e.target.value}%)`;
    filter=`grayscale(${e.target.value}%)`
     
 })

  //controlling with slider sepia
 $('#sepia').addEventListener('mousemove',(e)=>{
    if(grabed!=true){
     return;
    }
    console.log(e.target.value)
    video.style.filter=`sepia(${e.target.value}%)`;
    filter=`sepia(${e.target.value}%)`
     
 })
  








// taking picture
const takePicture=()=>{
    let context=canvas.getContext('2d');
    context.drawImage(video,0,0,width,height);
    let imgUrl=canvas.toDataURL('image/png');
    console.log(imgUrl);
    let img=document.createElement('img');
    img.setAttribute('src',imgUrl);
    img.setAttribute('download','img')
    img.style.filter=filter;
    $('.imgs').append(img);
}
$('.takePic').addEventListener('click',takePicture);

//setInterval(takePicture,24)