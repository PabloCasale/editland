///Elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

//Options AM - PM
const showAmPM = true;

//update time
function showTime(){
    // let today = new Date(2019,06,16,15,05,38),

    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

//AM or PM
    const am_pm = hour >= 12 ? 'PM' : 'AM';
    
 //12hr format
    hour = hour % 12 || 12;
    
//Output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPM ? am_pm : ''}`;

    setTimeout(showTime, 1000);
}

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set background
function setBack() {
    // let today = new Date(2019,06,18,15,05,38),
    let today = new Date(),
    hour = today.getHours();

    if( hour > 20 || (hour > 0 && hour < 6) ){
        
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
    }else if(hour > 6 && hour < 13){
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    }else{
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    }
}

function setName(ev){
    enter = 13;
    if(ev.type === 'keypress'){
        if(ev.which == enter || ev.keyCode == enter){
            localStorage.setItem('name', ev.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', ev.target.innerText);
    }
}

function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter your Name]'
    }else{
        name.textContent = localStorage.getItem('name')
    }
}

function setFocus(ev){
    enter = 13;
    if(ev.type === 'keypress'){
        if(ev.which == enter || ev.keyCode == enter){
            localStorage.setItem('focus', ev.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', ev.target.innerText);
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter your focus]'
    }else{
        focus.textContent = localStorage.getItem('focus')
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBack();
getName();
getFocus();