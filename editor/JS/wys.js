 
 
 
 function iframeOn(){

	 richTextField.document.designMode='On';
	
	
}
 function iBold(){
	 
	richTextField.document.execCommand('bold',false,null);
}
 function iUnderline(){
		richTextField.document.execCommand('underline',false,null);

}
 function iItalic(){
		richTextField.document.execCommand('italic',false,null);

}
 function iFontSize(){
	 var fontSize=prompt('Enter a Size From 1-7 :','');
	richTextField.document.execCommand('FontSize',false,fontSize);
}
 function iForeColor(){
    var fontcolor=prompt('Enter a Name or Hex value :','');
	richTextField.document.execCommand('Forecolor',false,fontcolor);
	
 }
 function iHorizontalRule(){
		richTextField.document.execCommand('inserthorizontalrule',false,null);

}
 function iUnorderedList(){
			richTextField.document.execCommand('InsertUnorderedList',false,"newUL");

}
 function iOrderedList(){
	  richTextField.document.execCommand('InsertOrderedList',false,"newOL");
}
 function iLink(){
	 var makelink=prompt('Write an URL:','http://')
		  richTextField.document.execCommand('CreateLink',false,makelink);

}
 function iUnlink(){
			  richTextField.document.execCommand('Unlink',false,null);

}
 function iImage(){
	 
	 var img=prompt('Write URL of Image :', '');
	 if(img!=null){
		 richTextField.execCommand('insertimage',false,img);
	 }
	
}
function Submit_data(){
	var theForm=document.getElementById('form_field');
	theForm.elements['textArea'].value=window.frames['richTextField'].document.body.innerHTML;
	theForm.submit();
	
	
}






