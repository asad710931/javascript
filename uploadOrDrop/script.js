

class Num{

    maxNum(nums){
      var defNum=0;
        for(n in nums){
            if(n<defNum){
                defNum=n;
            }
            return defNum;
        }
        
       }
}

nums=[2,4,5,19]
//console.log(num.maxNum(nums))

function bnToen(str){
    Obj={
        0:'০',1:'১',2:'২',3:'৩'
    }
    //let bn_num=['','','','','৪','৫','৬','৭','৮','৯'];
    //let en_num=['0','1','2','3','4','5','6','7','8','9']
    
     let re = new RegExp(Object.keys(Obj).join("|"))
     str=str.replace(re,(match)=>{
        return Obj[match];
     }) 
}


let text='1';
var text1=bnToen(text)
console.log(text1)



