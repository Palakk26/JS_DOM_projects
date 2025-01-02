var crsr = document.querySelector('#cursor')
var body = document.querySelector('body')
var h1 = document.querySelector('h1')
body.addEventListener('mousemove',function(dets){
     crsr.style.left = dets.x +'px'
    crsr.style.top = dets.y + 'px'
})
h1.addEventListener('mouseenter',function(){
    crsr.style.scale = 5
})
h1.addEventListener('mouseleave',function(){
    crsr.style.scale = 2
})