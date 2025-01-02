let h2 =document.querySelector('h2')
let btn =document.querySelector('button')
let img = document.querySelector('img')
let flag=0
btn.addEventListener('click',function(){
    if (flag==0){
        setInterval(function(){
            h2.style.color = 'green'
            h2.innerHTML = 'Friend'
            btn.innerHTML = 'Remove Friend'
            img.style.border = '3px solid green' 
        },3000)
        h2.style.color = 'yellow'
        h2.innerHTML = 'Wait'
        btn.innerHTML = 'Sending...'
        img.style.border = '3px solid orange'
        flag = 1
    }
    else {
        h2.style.color = 'red'
        h2.innerHTML = 'Stranger'
        btn.innerHTML = 'Add Friend'
        img.style.border = '3px solid red'
        flag = 0
    }

}) 