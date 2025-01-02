const teams = ['CSK',   
    'MI',    
    'RCB',  
    'KKR', 
    'SRH',   
    'RPS',   
    'DC',  
    'KXIP', 
    'GT', 
    'LSG'  ]
    let btn = document.querySelector('button')
    let h3 = document.querySelector('h3')
    btn.addEventListener('click',function(){
        let random = Math.floor(Math.random()*10)
        console.log(random)
        h3.innerHTML = teams[random]
    })
    