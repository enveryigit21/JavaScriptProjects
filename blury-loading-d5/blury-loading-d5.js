const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0 ;

let int = setInterval(blurring , 30)

function blurring () {
    load++
     
    if (load > 99  ) {
        clearInterval(int)
    }
  
      loadText.innerHTML = `${load}%`
    
       loadText.style.opacity = `${scale(load , 0, 100, 1, 0)}`
     
      loadText.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}