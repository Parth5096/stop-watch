let hrstime = document.getElementById("hrstime");
let mintime = document.getElementById("mintime");
let sectime = document.getElementById("sectime");
let milisectime = document.getElementById("milisectime");
let startStop = document.getElementById("start-stop");
let lapReset = document.getElementById("lap-reset");
let lapList = document.querySelector(".lap-container");
let lapCounter = 1;
let time = 0;
let isRunning = false;
let timerId = false;

function main() {
    startStop.style.backgroundColor = "#19361e";
	startStop.style.color = "green";
    lapReset.style.backgroundColor = "#353535";
    lapReset.style.color = "#c7c7c7";
    hrstime.innerHTML = "00";
    mintime.innerHTML = "00";
    sectime.innerHTML = "00";
    milisectime.innerHTML = "00";
    lapReset.innerHTML = "Reset";
    startStop.innerHTML = "Start";
    isRunning = false;
    lapCounter = 1;
}

main();

startStop.addEventListener("click", function () {
    if(isRunning == false){
        isRunning = true;
        startStop.innerHTML = "Stop";
        startStop.style.backgroundColor = "#351614";
        startStop.style.color = "red";
        lapReset.innerHTML = "Lap";
        lapReset.style.color = "#c7c7c7";
        stopwatch();
    }

    else {
        isRunning = false;
        startStop.innerHTML = "Start"; 
        startStop.style.backgroundColor = "#19361e";
        startStop.style.color = "green";
        lapReset.innerHTML = "Reset";

    }
});

let msec = 0;
let sec = 0; 
let min = 0;
let hrs = 0;
let count = 0;

function stopwatch(){
    if(isRunning == true){
count++;
if(count == 100){
    sec++;
    count = 0;  
}
if(sec == 59){
    min++;
    sec = 0;
}
if(min == 59){
    hrs++;
    min = 0;
    sec = 0;
}

var hrstring = hrs;
var minstring = min;
var secstring = sec;
var milisecstring = count;

if(count < 10){
    milisecstring = "0" + milisecstring;
}
if(sec < 10){
    secstring = "0" + secstring;
}
if(min < 10){
    minstring = "0" + minstring;
}
if(hrs < 10){
    hrstring = "0" + hrstring;
}

milisectime.innerHTML = milisecstring;
sectime.innerHTML = secstring;
mintime.innerHTML = minstring;
hrstime.innerHTML = hrstring;
    setTimeout("stopwatch()", 10);
}
}


function createLap() { 
    let div = document.createElement("div");
    div.setAttribute("class", "timeDiv");
    let divider = document.createElement("hr");
    let lapNum = document.createElement("span");
    lapNum.innerHTML = "Lap " + lapCounter;
    lapCounter++;
    lapList.scrollTop = lapList.scrollHeight;

    let timeStamp = document.createElement("span");
    timeStamp.innerHTML = `${hrstime.innerHTML} : ${mintime.innerHTML} : ${sectime.innerHTML} : ${milisectime.innerHTML}`;
    div.appendChild(lapNum);
    div.appendChild(timeStamp);
    lapList.appendChild(div);
    lapList.appendChild(divider);
}
 
lapReset.addEventListener("click", function () { 
    if (isRunning == true) { 
        createLap();
    }

    else {
        lapList.innerHTML = "";
        lapReset.innerHTML = "Reset";
         msec = 0;
         sec = 0; 
         min = 0;
         hrs = 0;
         count = 0;
        main();
        
    }
});