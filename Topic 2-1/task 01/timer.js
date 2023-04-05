const myInterval = setInterval(function() {
    let elemHours = document.getElementById("hours");
    let elemMinutes = document.getElementById("minutes");
    let elemSeconds = document.getElementById("seconds");

    let timeleft = Number(elemHours.textContent) * 60 * 60 + Number(elemMinutes.textContent) * 60 + Number(elemSeconds.textContent) - 1;

    let hours = Math.floor(timeleft / (60 * 60));
    let minutes = Math.floor((timeleft % (60 * 60)) / (60));
    let seconds = Math.floor((timeleft % (60 * 60)) % (60));
     

    if (hours < 10) elemHours.textContent = '0' + hours
    else elemHours.textContent = hours;
    
    if (minutes < 10) elemMinutes.textContent = '0' + minutes
    else elemMinutes.textContent = minutes;
    
    if (seconds < 10) elemSeconds.textContent = '0' + seconds
    else elemSeconds.textContent = seconds;
    
    if (timeleft === 0) {
        clearInterval(myInterval);
        window.location = 'https://mobimg.b-cdn.net/v3/fetch/f7/f7a317ad3f458956de34f8ffe5b8aa97.jpeg';
    }
}, 1000);

