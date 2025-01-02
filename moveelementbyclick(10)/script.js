let img = document.querySelector('img')
let h1 = document.querySelector('h1')
let moveX = 0
let moveY = 0
document.addEventListener('keydown',function(dets){
    if(dets.code=='ArrowRight' && moveX<90){
        moveX++
        img.style.left = moveX  + '%'
    }

    else if(dets.code=='ArrowDown' && moveY<90){
        moveY++
        img.style.top = moveY  + '%'
    }

    else if(dets.code=='ArrowLeft' && moveX>0){
        moveX--
        img.style.left = moveX  + '%'
    }

    else if(dets.code=='ArrowUp' && moveY>0){
        moveY--
        img.style.top = moveY  + '%'
    }
    
    
})
