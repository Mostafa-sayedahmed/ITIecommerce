

    var httpRequestall = new XMLHttpRequest();
    httpRequestall.open("GET","/assets/products.json", true);
    httpRequestall.onreadystatechange = function () {
    if (httpRequestall.readyState == 4 && httpRequestall.status == 200)
     {
            var dataRes=httpRequestall.response;
            var dataAfterParse=JSON.parse(dataRes);
        for(var i=0; i<dataAfterParse.length;i++)
        {
            document.getElementsByClassName("cat")[i].innerHTML=dataAfterParse[i].category;
            document.getElementsByClassName("card-img")[i].innerHTML= "<img src="+" ' "+dataAfterParse[i].prod_image.img2+" 'width=150 height=150><br>";;
            
        }
          
          
    }
    }
    httpRequestall.send();
