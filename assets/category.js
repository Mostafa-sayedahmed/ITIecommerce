function showcategory()
{
        // calling JSON file
        var httpRequestall = new XMLHttpRequest();
        httpRequestall.open("GET","./products.json", true);
        httpRequestall.onreadystatechange = function () {
        if (httpRequestall.readyState == 4 && httpRequestall.status == 200)
         {
                var dataRes=httpRequestall.response;
                var dataAfterParse=JSON.parse(dataRes);
            for(var i=0; i<4;i++)
            {
               
                      var temp =document.getElementById('cardtemp1').content
                        var newcontent =document.importNode(temp,true)
                        newcontent.getElementById('cat1').textContent=dataAfterParse[i].category
                        var proimg =newcontent.getElementById('pro_img1')
                        proimg.setAttribute('src',dataAfterParse[i].prod_image.img1);
                    
                    document.getElementById('featured_container1').appendChild(newcontent)
                  
              
                
            }
            // console.log(dataAfterParse);
    
        }
    }
    httpRequestall.send();
}
function displayproduct(ctrl){
        var httpRequestall = new XMLHttpRequest();
        httpRequestall.open("GET","./products.json", true);
        var TextInsideLi = ctrl.getElementsByTagName('p')[0].textContent;
        httpRequestall.onreadystatechange = function () {
        if (httpRequestall.readyState == 4 && httpRequestall.status == 200)
         {      
                var dataRes=httpRequestall.response;
                var dataAfterParse=JSON.parse(dataRes);
            for(var i=0; i<dataAfterParse.length;i++)
            {
                if(dataAfterParse[i].category== TextInsideLi)
               {
               // console.log(dataAfterParse[i].prod_name);
                window.location.href =`showproduct.html?category=${dataAfterParse[i].category}`;
            //     console.log(dataAfterParse[i].category);
            //     if(category==TextInside)
            //     {
            //         console.log(dataAfterParse[i].prod_name);
            //     }
            //     document.getElementById("mydiv").innerHTML="flower id: "+dataAfterParse[i].prod_id + "<br><br> flower name: "+dataAfterParse[i].prod_name+"<br><br> category:"+dataAfterParse[i].category+"<br><br> flower description: "+dataAfterParse[i].prod_description +"<br><br> flower price:"+dataAfterParse[i].prod_price+"<br><br> quantity:"+dataAfterParse[i].prod_quantity;
            // //     par=window1.document.createElement('p');
            // //    par.innerHTML=dataAfterParse[i].prod_name;
            // //    window1.document.body.appendChild(par);
            // //    //par.innerHTML="";
            // //     //window1.document.body.removeChild(par);
            // //     //window1.document.writeln("<div><h2 id='id_pro'>flower id:"+dataAfterParse[i].prod_id + "</h2><br><br> flower name: "+dataAfterParse[i].prod_name+"<br><br> category:"+dataAfterParse[i].category+"<br><br> flower description: "+dataAfterParse[i].prod_description +"<br><br> flower price:"+dataAfterParse[i].prod_price+"<br><br> quantity:"+dataAfterParse[i].prod_quantity+"<br <br>image:<img src="+" ' "+dataAfterParse[i].prod_image.img1+" 'width=150 height=150><br>");
            
               }
            
            }
            // console.log(dataAfterParse);
    
        }
    }
    httpRequestall.send();
}
