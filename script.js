function startTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let day = today.getDate();
    let month = today.getMonth() +1;
    let year = today.getFullYear();
   
    setTimeout(startTime, 1000);


    (hours <10) ? document.getElementById("hour").innerHTML = "0"+hours :
                    document.getElementById("hour").innerHTML = hours;

    (minutes < 10) ? document.getElementById("minute").innerHTML = "0"+minutes:
                      document.getElementById("minute").innerHTML = minutes;

    (seconds < 10) ? document.getElementById("second").innerHTML = "0"+seconds:
                      document.getElementById("second").innerHTML = seconds;



document.getElementById("date").innerHTML  = ` ${day}/${month}/${year}`


  }
