let count = 0
let timerID = setInterval(()=> { 
    console.log("Hello there..")
    count = count + 1
    if(count == 3)
        clearInterval(timerID)
},1000)




