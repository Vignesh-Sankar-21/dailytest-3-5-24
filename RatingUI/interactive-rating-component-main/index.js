var btnsubmit=document.getElementById("btn-submit")
var bt1=document.getElementById("bt1")
var bt2=document.getElementById("bt2")
var bt3=document.getElementById("bt3")
var bt4=document.getElementById("bt4")
var bt5=document.getElementById("bt5")
var c=0
btnsubmit.addEventListener("click",function(){
    var box5=document.getElementById("box5")
    var div1=document.createElement("div")
    var h11=document.createElement("h1")
    h11.innerHTML="THANK YOU!"
    div1.style.width="300px"
    div1.style.height="300px"
    div1.style.backgroundColor="black"
    div1.style.color="white"
    div1.setAttribute("class","box")
    div1.innerHTML=`<p> you are selected ${c} of 5 </p>`
    box5.style.display="none"

    
    


})
bt1.addEventListener("click",function(){
    bt1.style.backgroundColor="white"
    bt1.style.color="grey"
    c=bt1.value

})
bt2.addEventListener("click",function(){
    bt2.style.backgroundColor="white"
    bt2.style.color="grey"
    c=bt2.value

})
bt3.addEventListener("click",function(){
    bt3.style.backgroundColor="white"
    bt3.style.color="grey"
    c=bt3.value

})
bt4.addEventListener("click",function(){
    bt4.style.backgroundColor="white"
    bt4.style.color="grey"
    c=bt4.value

})
bt5.addEventListener("click",function(){
    bt5.style.backgroundColor="white"
    bt5.style.color="grey"
    c=bt5.value

})

