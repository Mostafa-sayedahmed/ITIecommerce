

var number=document.getElementById("number")
var orderTotal=document.getElementById("order-total")
var prodPrice=document.getElementById("prod-price")

number.onchange=function(){
        orderTotal.style="color:#2b3a55;font-weight:bold"        
       var res= number.value * 49.00;
        orderTotal.innerText=res;

}




/****************************************/
//display img

var dispalyImg=document.getElementById("img1")
var selectImg1=document.getElementsByClassName("img")[0]
var selectImg2=document.getElementsByClassName("img")[1]
var selectImg3=document.getElementsByClassName("img")[2]
// console.log(dispalyImg);

selectImg1.addEventListener("click",function(){
        
        dispalyImg.src=selectImg1.src
})

selectImg2.addEventListener("click",function(){
        
        dispalyImg.src=selectImg2.src
})

selectImg3.addEventListener("click",function(){
        
        dispalyImg.src=selectImg3.src
})

   




