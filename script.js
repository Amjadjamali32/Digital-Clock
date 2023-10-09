function updateTime(){
    const now = new Date();
    let hours = String(now.getHours());
    const min = String(now.getMinutes());
    const sec = String(now.getSeconds());
    let amOrpm = 'AM';

    if(hours >= 12){
        amOrpm = 'PM';
        if(hours > 12){
            hours -= 12;
        }
    }
    
    if(hours === 0){
        hours = 12;
    }

    const timeString = `${hours}:${min}:${sec} ${amOrpm}`;
    const a = document.getElementById('heading').textContent = timeString;
}
setInterval(updateTime , 1000);

// clock code
  
  function show_clock(){

 let h = document.getElementsByClassName('hr')[0];
 let m = document.getElementsByClassName('mn')[0];
 let s = document.getElementsByClassName('ss')[0];

 let date = new Date(); 

 let hours = date.getHours();
 let minutes = date.getMinutes();
 let seconds = date.getSeconds();

 h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
 m.style.transform = `rotate(${6 * minutes}deg)`;
 s.style.transform = `rotate(${6 * seconds}deg)`;
}
setInterval(show_clock, 1000);   