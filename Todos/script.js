
// for simple selecting DOM elements of html
//for single element
const $=(e)=>{ return document.querySelector(e) }
//for multiple elements selection
const $_=(e)=>{ return document.querySelectorAll(e) }
var dumyData=[{
    index:1,
    todos:'Start Writing Your Task',
    done:false,
    taskTime:"",
    timeNow:""
},
{
    index:2,
    todos:'Make Wise List Now',
    done:false,
    taskTime:"",
    timeNow:""
}]



if(localStorage.getItem('dataLists')==null) localStorage.setItem('dataLists',JSON.stringify(dumyData)); 



// handle submition 
$('#form').addEventListener("submit",handleDataStorage);





//submition function 



function handleDataStorage(e){
    e.preventDefault();

    let now = new Date();
    let h=now.getHours(),m=now.getMinutes(),s=now.getSeconds();
    let timeN=`${h}:${m}:${s}`



    let indexOfStorage=JSON.parse(localStorage.getItem('dataLists'))

    let index = localStorage.getItem('dataLists')===null?0:indexOfStorage.length+=1;
    console.log(index)
    let text=$(`input[name="text"]`).value;
    let taskTime=$(`input[name="time"]`).value;

   // let dataStorage=JSON.parse(localStorage.getItem('dataLists'))
   // console.log(dataStorage.lastIndexOf(dataStorage))
    //let index=0;

    var dataList={
        index:index,
        todos:text,
        done:false,
        taskTime:taskTime,
        timeNow:timeN
    }
    //dataLists.push(dataList);
    //localStorage.setItem('dataLists',JSON.stringify(dataLists)); 
 

    if(localStorage.getItem('dataLists')==null){
         var dataLists=[];
         dataLists.push(dataList1);
        localStorage.setItem('dataLists',JSON.stringify(dataLists)); 
    }else{
        var dataLists=JSON.parse(localStorage.getItem('dataLists'))
        dataLists.push(dataList);
        localStorage.setItem('dataLists',JSON.stringify(dataLists)); 

        

    }
    $(`input[name="text"]`).value='',
    $(`input[name="time"]`).value='',
    
    fetchData();
}


//remove specific item from items
const handleRemove=(index)=>{
    console.log(index)
    let dataLists=JSON.parse(localStorage.getItem('dataLists')); 
    let check=confirm(`Do you want Delete this TODOS?`);
    if (check==false) return ;
    for(i=0;i<dataLists.length;i++){
        if(dataLists[i].index==index){
            dataLists.splice(i,1);
        }
    }
    localStorage.setItem('dataLists',JSON.stringify(dataLists))
    fetchData();
    
}

let hold=false;

document.addEventListener('keydown',(e)=>{
  if(e.key=='Control'){
    hold=true;
    

  }

});

document.addEventListener('keyup',(e)=>{
    hold=false;
  }

)

//handle selection beheave of a item
const handleSelect=(index)=>{
    

    var dataList=JSON.parse(localStorage.getItem('dataLists'));

    if(hold){
       let firstOne;
       for(i=0;i<dataList.length;i++){
           if(dataList[i].done==true){
             firstOne=dataList[i].index;
             break;
          }
         
       }
      
      console.log(firstOne,index);
      for(firstOne;firstOne<dataList.length;firstOne++){
          console.log(dataList[firstOne]);
           dataList[firstOne-1].done=true;
          
          if((firstOne+1)==index){
           break
            }  
        }
    }
  
   //console.log(dataList)
    for(i=0;i<dataList.length;i++){
     if(dataList[i].index==index){
         if(dataList[i].done==false){
            dataList[i].done=true;
            $('#check-all').setAttribute('checked','');

         }else{
            dataList[i].done=false;
         }
     }
    }
    
    localStorage.setItem('dataLists',JSON.stringify(dataList))
    fetchData();
 
 }

 const handleSelectionAll=()=>{
    var dataList=JSON.parse(localStorage.getItem('dataLists'));

    if (!$('#check-all').checked) {
        for(i=0;i<dataList.length;i++){
           dataList[i].done=false;
        }
    }else{
    console.log("ok");
    for(i=0;i<dataList.length;i++){
        dataList[i].done=true;
        $('#check-all').setAttribute('checked','');
     }
    }
    localStorage.setItem('dataLists',JSON.stringify(dataList))
    fetchData();
 }

 $('#check-all').addEventListener('click',handleSelectionAll)










const handleSelectedItems=()=>{
    var dataList=JSON.parse(localStorage.getItem('dataLists'));
    let check=confirm(`Make sure if want remove all selected TODOS ?`);
    if (check==false) return ;
    let datalists=dataList.filter((data)=>{
        if(data.done==false){
         return data;
        }
    });
    console.table(datalists);
    //var items=[];
    /*
    for(i=0;i<dataList.length;i++){

        if(dataList[i].done==true){
            dataList.splice(i,1);
            continue;
        }
    }
    */
    localStorage.setItem('dataLists',JSON.stringify(datalists));
    fetchData();
}

$('.removes-btn').addEventListener('click',handleSelectedItems)

let dataId;
const handleEdit=(id)=>{
    datalist= JSON.parse(localStorage.getItem('dataLists'));
    datalists=datalist.map(data=>{
        if(data.index==id){
           
            $('.text').value=data.todos;
            $('.time').value=data.taskTime;
            
        }
        
    });
    dataId=id;
    //console.log(datalists)   
}

// for editing data
const submitEdited=()=>{
   var dataLists=JSON.parse(localStorage.getItem('dataLists'));
   let text=$('.text');
   let wtime=$('.time');
   console.log(text);
   for(i=0;i<dataLists.length;i++){
    if(dataLists[i].index==dataId){
        dataLists[i].todos=text.value;
        dataLists[i].taskTime=wtime.value;
       // console.log(dataLists[i]);
    }
   }
   text.value='',wtime.value='';
   localStorage.setItem('dataLists',JSON.stringify(dataLists))
   fetchData()


}

$('.edit-btn').addEventListener('click',submitEdited)

// Init Data function for fatching data everytime new event occurred
const fetchData=()=>{
    var dataLists=JSON.parse(localStorage.getItem('dataLists'))
    let div = $('.list');
    div.innerHTML='';
    for(i=0;i<dataLists.length;i++){
        index=dataLists[i].index;
        todos=dataLists[i].todos;
        taskTime=dataLists[i].taskTime;
        timeNow=dataLists[i].timeNow;
        done=dataLists[i].done==true?'checked':'';
        let indClass=i<9? 'index2' : 'index1';
        dataLists[i].index=i+1;
        id=i+1;
        div.innerHTML+=`<div class="box">
        <input type="checkbox" id="checkbtn" onChange="handleSelect('${id}')" ${done}/>
        <span class="${indClass}">${i+1}</span>
         <span class="todos" title="Added at : ${timeNow}"> ${todos} </span> 
         <span class="task-time"> ${taskTime} </span>
         <button class="btn" onclick="handleEdit('${id}')">edit</button>
         <button class="btn" onclick="handleRemove('${id}')">X</button>
         </div>`
    }
    localStorage.setItem('dataLists',JSON.stringify(dataLists))

    

}


//$('#checkbtn').addEventListener('change',handleSelect);

