
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

else{    mail.setAttribute("style", "border:red solid 3px")  ;eflag=0;

}
return true;}
function nvalid()
{
    let  number=document.getElementById("number");  
    let nregexp=/^(((\d{3})\-(\d{3})\-(\d{4}))|(\d{10})|((\d{3}) (\d{3}) (\d{4}))|((\d{3}).(\d{3}).(\d{4})))$/;
    console.log(number.value);
    if(nregexp.test(number.value)){
    number.setAttribute("style", "border:yellowgreen solid 2px")  
    console.log("number valid");
    nflag=1;
    
}
else{    number.setAttribute("style", "border:red solid 3px")  
nflag=0;
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
let progress=document.getElementById("progress");
function pvalid(){
        let upper=document.getElementById("upper");
        let lower=document.getElementById("lower");
        let number=document.getElementById("pnumber");
        let symbol=document.getElementById("symbol");
        let l=document.getElementById("l");
        
let password=document.getElementById("password");
let val=password.value;

var match=new Array();
match.push("[~!@#$%^&*()_`<>:/*-+?]");
match.push("[0-9]");
match.push("[A-Z]");
match.push("[a-z]");
if(val.match("[A-Z]")){

upper.style.color="green";
}
else{
        upper.style.color="red";
}
if(val.match("[a-z]")){
        lower.style.color="green";
       
}
else{
        lower.style.color="red";
}
if(val.match("[0-9]")){
        number.style.color="green";
}
else{
        number.style.color="red";
}
if(val.match("[[~!@#$%^&*()_`<>:/*-+?]")){
        symbol.style.color="green";
}
else{
        symbol.style.color="red";
}
for(var i=0;i<match.length;i++)
{
    if(new RegExp(match[i]).test(val))
    {
        prog++;
    }
}


if(val.length>=8)
{prog++;
l.style.color="green";
}
else{
        l.style.color="red";
}
switch(prog){
    case 1:
            progress.setAttribute("style","background-color: red;width:20%;");break;
    case 2:
            progress.setAttribute("style","background-color: orange;width:40%;");break;

    case 3:
            progress.setAttribute("style","background-color: #F6BE00;width:60%;") ; break;
    case 4:
            progress.setAttribute("style","background-color: yellowgreen;width:80%;");break;
    case 5:
            progress.setAttribute("style","background-color: green;width:100%;");pflag=5;break;
    default:
           progress.setAttribute("style","background-color: red;width:0%;");break;
        
}
if(prog==5)
{
        let str=document.getElementById("stren");
        str.style.overflow= "hidden";
        str.style.width="0px";
        str.style.height="0px"; 
        pflag=1;     
}
if(prog!=5 )
{       pflag=0;
        let str=document.getElementById("stren");str.style.overflow= "visible";
        str.style.width="100%";
        str.style.height="450%";     
}


prog=0;
return true;
}
function noshow()
{  let str=document.getElementById("stren");
        str.style.overflow= "hidden";
str.style.width="0%";
str.style.height="0px"; 
let f=document.getElementsByClassName("bar1");

    return true;    
}
function sub()
{
    console.log(nflag,pflag,eflag);
    
   if(eflag!=0&&nflag!=0&&pflag!=0)
   {alert("Succesfully registered... you can now  log in to your  account");
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
    if(nflag==0)
    {
        alert("Phone number not valid enter a valid number accept additional 3 formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX. X in digits ");
       
    }alert("Try again");
     return false;
}
}