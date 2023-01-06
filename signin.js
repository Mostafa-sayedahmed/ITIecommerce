var flg=1,flg1=0,flg2=0;
function confemail() {
    mail = document.getElementById("mail").value;
    var httpRequestuser=new XMLHttpRequest();
    httpRequestuser.open("GET","http://127.0.0.1:5500/users.json", true);
    httpRequestuser.onreadystatechange = function () {
        if (httpRequestuser.readyState == 4 && httpRequestuser.status == 200)
         {
                var dataRes=httpRequestuser.response;
                var dataAfterParse=JSON.parse(dataRes);
            for(var i=0; i<dataAfterParse.length;i++)
            {
                if(dataAfterParse[i].user_email==mail){
                    flg1=1;
                    break;
                }   
            }
            if(flg1==1){
                document.getElementById("mail").style.border = "solid 2px green";
                
            }else{
                document.getElementById("mail").style.border = "solid 2px red";
            }
        }
        }
        httpRequestuser.send();
}
function conf() {

   
    pas = document.getElementById("pass").value;
    var httpRequestuser=new XMLHttpRequest();
    httpRequestuser.open("GET","http://127.0.0.1:5500/users.json", true);
    httpRequestuser.onreadystatechange = function () {
        if (httpRequestuser.readyState == 4 && httpRequestuser.status == 200)
         {
                var dataRes=httpRequestuser.response;
                var dataAfterParse=JSON.parse(dataRes);
            for(var i=0; i<dataAfterParse.length;i++)
            {
                if(dataAfterParse[i].user_password==pas){
                   flg2=1;
                   break;
                }
            }
            if(flg2==1){
                document.getElementById("pass").style.border = "solid 2px green";
                
            }else{
                document.getElementById("pass").style.border = "solid 2px red";
            }
        }
        }
        httpRequestuser.send();

}
function validation(){
    var elm=document.getElementsByTagName("input");  
    for(var i=0;i<elm.length;i++){
        if(elm[i].value==''){
            flg=0;
            break;
        }
    }  
    if(flg==0||flg1==0||flg2==0){
        document.getElementById("myForm").addEventListener("submit",function(e){
            e.preventDefault();
        })
           
    }
    else{
       
        
    }
}


