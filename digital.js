seconds = document.querySelector('.seconds')
minutes = document.querySelector('.minutes')
hours = document.querySelector('.hours')
// timeButton = document.querySelector('.twelve-hr-button')
// twentyFourButton = document.querySelector('.twenty-four-hr-button')

setInterval(time, 1000)

function time() {
    const currentDate =  new Date()

    currentSeconds = currentDate.getSeconds()
    currentMinutes = currentDate.getMinutes()
    currentHours = currentDate.getHours()

    seconds.innerText = 'Seconds:' + currentSeconds
    minutes.innerText = 'Minutes:' + currentMinutes
    hours.innerText = 'Hours:' + currentHours

    // setInterval(time, 1000)

    // location.reload();

}

// function twelve_Version() {

//     const currentDates =  new Date()

//     currentSecond = currentDates.getSeconds()
//     currentMinute = currentDates.getMinutes()
//     currentHour = currentDates.getHours()

//     seconds.innerText = 'Seconds:' + currentSecond 
//     minutes.innerText = 'Minutes:' + currentMinute
//     hours.innerText = 'Hours:' + (currentHour - 12)

//     setInterval(twelve_Version, 1000)

//     location.reload();


// }

// twentyFourButton.addEventListener('click', ()=> {

//     location.reload();
//     time();
//     setInterval(time, 1000)

// })


timeButton.addEventListener('click', ()=> {

    twelve_Version();
    

})




