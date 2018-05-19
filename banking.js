var amt=document.getElementById("bal"); 
var button=document.getElementById("submit"); 
//console.log("check");  
var buy=document.getElementsByClassName("list-group-item list-group-item-action");  
var cc=document.getElementById("clear"); 
var cartamount=0; 
var amount=0;  
var temp; 
amt.addEventListener("keypress",function (event) {  
	if(event.keyCode===13){ 
	 amount=Number(amt.value);  
	 temp=amount;
	 amt.value="";

	}
})
button.addEventListener("click",function () {
	 amount=Number(amt.value);  
	 temp=amount;
	 amt.value=""; 
	 return amount; 

})  
var bt1=document.getElementById("btngrp-1");   
var but1=10;
var bt2=document.getElementById("btngrp-2");   
var but2=20;
var bt3=document.getElementById("btngrp-3");  
var but3=30; 
var bt4=document.getElementById("btngrp-4");  
var but4=40;
var bt5=document.getElementById("btngrp-5");
var but5=50;    
console.log(amount); 
function deduct(event) {  
	console.log("in function"); 
	if(amount>=event){
	amount= amount-event; 
	console.log(amount); 
document.getElementById("balance").innerHTML="$"+amount;  
cartamount=cartamount+event;  
document.getElementById("cart").innerHTML="$"+cartamount; 
	return amount; 
} 
else  
alert("Insufficent Balance")
	}  
bt1.addEventListener("click",function () { deduct(but1); });
bt2.addEventListener("click",function () { deduct(but2); }); 
bt3.addEventListener("click",function () { deduct(but3); }); 
bt4.addEventListener("click",function () { deduct(but4); }); 
bt5.addEventListener("click",function () { deduct(but5); }); 

cc.addEventListener("click",function(){ 
cartamount=0;   
document.getElementById("cart").innerHTML="$"+cartamount;
amount=temp;  
document.getElementById("balance").innerHTML="$"+amount;
});