
 let showTime=document.querySelector(".time");
 let setGreeting=document.querySelector(".greeting");
 let setEubmit=document.querySelector(".submit-msg");
 let setEmail=document.querySelector(".input-email"); 


 let setDate = new Date();
 
 let hour = setDate.getHours()
 let minutes = setDate.getMinutes()
 let seconds = setDate.getSeconds()

 
 function setTime(){
     let formatTime=hour>=12? "PM":"AM";
     showTime.innerHTML=`${hour} <span>:<span> ${minutes} <span>:<span> ${seconds} ${formatTime}`
 }

function addGreeting(){
    if (hour <12){
        setGreeting.innerHTML="Good morning ";
       document.body.style.background = "URL('/img/morning-bg.jpg')";
        document.body.style.bookgroundsize="cover"
    }
  else  if (hour <18){
        setGreeting.innerHTML="Good afternoon "
        document.body.style.background = "URL('/img/afternoon.jpg')";
        document.body.style.bookgroundsize="cover"
    }
    else{
        setGreeting.innerHTML="Good evening "
        document.body.style.background="URL('/img/evening.jpg')";
        document.body.style.bookgroundsize="cover"
    }
}
setInterval(addGreeting, 1000);
addGreeting()
 setTime()