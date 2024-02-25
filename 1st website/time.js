

const labe = document.getElementById("hour");
setInterval(update, 1000);

function update(){
    let date = new Date();
    labe.innerHTML = time(date);
    function time(date){
        let hour = date.getHours();
        hour =zeroH(hour);
        let min = date.getMinutes();
        min = zeroH(min);
        let sec = date.getSeconds();
        sec = zeroH(sec);
        let amOrPm = (hour >= 12) ? "pm" : "am";
        hour = (hour % 12) || 12;
        return `${hour}:${min}:${sec}${amOrPm}`;
    }
    function zeroH(time){
        time = time.toString();
        return time.length < 2 ? "0"+time : time;
    }
}






