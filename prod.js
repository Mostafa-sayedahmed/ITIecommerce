

var number=document.getElementById("number")
var orderTotal=document.getElementById("order-total")
var prodPrice=document.getElementById("prod-price")

number.onchange=function(){
        orderTotal.style="color:#2b3a55;font-weight:bold"        
       var res= number.value * 49.00;
        orderTotal.innerText=res;

}
/**********************Getting product ID from url***********************/

    // first i want to store the url in a variable
    var url = new URL(window.location.href)
    console.log(url)
    //then i want to remove all unnecessary
    console.log(url.search)
    var urlparams =new URLSearchParams(url.search)
    //then getting my values throw the input name as key
     var pid = urlparams.get('pid')
    console.log(`Product ID is : ${pid}`)
    


/******************connecting with products json file**********************/
var httpRequestall = new XMLHttpRequest();
httpRequestall.open("GET","/assets/products.json", true);
httpRequestall.onreadystatechange = function () {
if (httpRequestall.readyState == 4 && httpRequestall.status == 200)
 {
        var dataRes=httpRequestall.response;
        var dataAfterParse=JSON.parse(dataRes);
    for(var i=0; i<dataAfterParse.length;i++)
    {
        if(dataAfterParse[i].prod_id==pid){


                
        /******************display Product data**********************/
        document.getElementById('prodname').innerText= dataAfterParse[i].prod_name
        document.getElementById('prod-desc').innerText= dataAfterParse[i].prod_description
        document.getElementById('prod-category').innerText= dataAfterParse[i].category
        document.getElementById('prod-price').innerText= dataAfterParse[i].prod_price
        /******************display imgs**********************/
        document.getElementById("img1").setAttribute('src',dataAfterParse[i].prod_image.img1)
        document.getElementsByClassName("img")[0].setAttribute('src',dataAfterParse[i].prod_image.img1)
        document.getElementsByClassName("img")[1].setAttribute('src',dataAfterParse[i].prod_image.img2)
        document.getElementsByClassName("img")[2].setAttribute('src',dataAfterParse[i].prod_image.img3)
         
        console.log(dataAfterParse[i])

        }
}
}
}
httpRequestall.send();


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



   




