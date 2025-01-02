alert('hey')
let btns = document.querySelectorAll('button')
let body = document.querySelector('body')
btns.forEach(function(elems){
    elems.addEventListener('click',function(){
        console.log(elems.innerHTML);
        body.style.backgroundColor = elems.innerHTML     
    })
})
    