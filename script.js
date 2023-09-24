let[sec,min,hour] = [0,0,0];
let displaytime = document.getElementById("displaytime")
let timer = null
function clock(){
    sec++;
    if(sec == 60){
        sec = 0;
        min ++;
        if(min ==60){
            min = 0;
            hour++;
        }
    }
    let h = hour < 10 ? "0"+hour : hour;
    let m = min < 10 ? "0"+min: min;
    let s = sec < 10 ? "0" +sec : sec;

    displaytime.innerHTML = h+ ":"+ m+":"+s;
}

function start(){
timer = setInterval(clock,1000)
displaytime.style.color = '#39FF14'

}
function stop(){
    clearInterval(timer)
    displaytime.style.color = "red"
}
function reset(){
    [sec,min,hour] = [0,0,0];
    displaytime.innerHTML = "00:00:00"
    clearInterval(timer)
    displaytime.style.color = "white"
}
