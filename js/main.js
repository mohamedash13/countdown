let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

setInterval(() => {
        if(seconds.innerText != 0){
            seconds.innerText-=1
        }else if(days.innerText == 0 && hours.innerText == 0 && minutes.innerText == 0 && seconds.innerText == 0){
            seconds.innerText = 0
            minutes.innerText = 0
            days.innerText = 0
            minutes.innerText = 0
        } 
        else if(seconds.innerText == 0){
            seconds.innerText = 60
            if(minutes.innerText == 0){
                minutes.innerText = 60
                if(hours.innerText == 0){
                    hours.innerText = 24
                    if(days.innerText == 0){
                        days.innerText = 0
                    } 
                    days.innerText -= 1
                }
                hours.innerText -= 1
            }
            minutes.innerText -= 1
        } 
}, 1000);