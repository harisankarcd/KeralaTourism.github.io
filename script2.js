
let mark=0;
let a,b,c,a1,b1,c1;
var eflag=0;
var nflag=0;
var pflag=0;
let strength=document.getElementById("strength");
function evalid(){
    let mail=document.getElementById("email");
   
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Z0-9a-z]+).([a-z]{2,3})(.[a-z]{2,3})$/;
    // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regexp.test(mail.value)){
    mail.setAttribute("style", "border:green solid 3px") ;
    eflag=1;
    
}

else{    mail.setAttribute("style", "border:red solid 3px")  
eflag=0;
}
return true;}
function nvalid()
{
    let  number=document.getElementById("number");  
    let nregexp=/^(((\d{3})\-(\d{3})\-(\d{4}))|(\d{10})|((\d{3}) (\d{3}) (\d{4})))$/;
    console.log(number.value);
    if(nregexp.test(number.value)){
    number.setAttribute("style", "border:yellowgreen solid 2px")  
    console.log("number valid");
    nflag=1;
    
}
else{    number.setAttribute("style", "border:red solid 3px")  

}
return true;
}
function show(){
        let str=document.getElementById("stren");
        str.style.overflow= "visible";
        str.style.width="100%";
        str.style.height="450%";
}
let prog=0;

function pvalid(){
       
        
let password=document.getElementById("password");
let val=password.value;

var match=new Array();
match.push("[~!@#$%^&*()_`<>:/*-+?]");
match.push("[0-9]");
match.push("[A-Z]");
match.push("[a-z]");

for(var i=0;i<match.length;i++)
{
    if(new RegExp(match[i]).test(val))
    {
        prog++;
    }
}
if(val.length>=8)
{prog++;

}

switch(prog){
    case 1:password.setAttribute("style","border: red 2px solid;");break;
    case 2:
            password.setAttribute("style","border: orange 2px solid;");break;

    case 3:
            password.setAttribute("style","border:2px solid yellow;") ; break;
    case 4:
            password.setAttribute("style","border:2px solid yellowgreen;");break;
    case 5:
            password.setAttribute("style","border:2px solid green;");
            pflag=1;
            break;
    default:
           password.setAttribute("style","border:2px solid red;");break;
        
}

if(prog==5){
// {password.setAttribute("style", "border:yellowgreen solid 2px")
 pflag=1;          
}
if(prog!=5 )
{
// {password.setAttribute("style", "border:red solid 2px")
  pflag=0;       
}


prog=0;
return true;
}

function sub()
{
    console.log(pflag,eflag);
    
   if(eflag!=0&&pflag!=0)
   {alert("succesfully logged in ...");
       return true;
   }
   
   else{
       if(eflag==0)
        {   alert("Not a valid email  should be of the form your_name@domain_name.extension.optional_extensions");

        }
    if(pflag==0)
    {
        alert("Not a valid password  Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        // return false;
    }
   alert("Try again");
     return false;
}
}