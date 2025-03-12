






const $=(e)=>{return document.querySelector(e)}

//

//let weight=65, height=172, age=28


$('#form').addEventListener('submit',(e)=>{
    e.preventDefault()

    let weight=$('#Weight').value, height=$('#Height').value, age=$('#Age').value
    let BMRCal;

    if($('#Gender').value=='Man'){
        BMRCal = (10*weight)+(6.25*height)-(5*age)+5;
    }else{
        BMRCal = (10*weight)+(6.25*height)-(5*age)-161;
    }


    $('#result').innerText=`BMR : ${BMRCal} Calories per day`;
    console.log(BMRCal)
})

