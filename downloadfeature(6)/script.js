let loading = document.querySelector('.loading')
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let h3 = document.querySelector('h3')
let sum = 0
btn.addEventListener('click',function(){
    let interval = setInterval(function(){
        sum++
        console.log(sum)
        loading.style.width = sum + '%'
        h3.innerHTML = sum + '%'
    },50)

    setTimeout(function(){
        clearInterval(interval)
        h1.innerHTML = 'Your file is Downloaded'
        btn.style.opacity = '0.7'
        btn.style.pointerEvents = 'none'
        console.log('download completed')

    },5000)
    
})
    