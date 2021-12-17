const loadText = document.quwrySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0      //to load at 0

let int = setInterval(blurring, 30) 

//after every 30msec for the bluring function.


// used bluring function

function blurring() {
    load++

    if (load > 99){
        clearInterval(int)

    }
    
 // this will make the load text to load from 0 to 100 
    
    loadText.innerText = '$(load)%'
    loadText.style.opacity = scale (load, 0, 100, 1, 0)

    // Mapping the opacity here.

    bg.style.filter = 'blur(${scale(load, 0, 100, 30, 0)}px)'

   
}

// Stackoverflow function post used in the last. 

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
