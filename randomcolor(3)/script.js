let btn = document.querySelector('button')
let box = document.querySelector('.box')

btn.addEventListener('click',function(){
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    box.style.backgroundColor = `rgb(${r},${g},${b})`
    box.style.height = `${r}px`
    box.style.width  = `${g}px`
    box.style.borderRadius  = `${b}px`
    btn.style.color = `rgb(${r},${g},${b})`
})
