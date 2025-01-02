let btn = document.querySelector('button')
let body = document.querySelector('body')

btn.addEventListener("click",function(){
    let img = document.createElement('img')
    img.setAttribute('src',"https://pngimg.com/d/anime_girl_PNG109.png")
    body.appendChild(img)

    img.style.top = Math.floor(Math.random()*100) + "%"
    img.style.left = Math.floor(Math.random()*100) + "%"
    img.style.rotate = Math.floor(Math.random()*100) + 'deg'
})