let users = [
    {   username: 'palak',
        dp:"https://media.istockphoto.com/id/1395567847/photo/girl-in-an-oversized-hoodie-wearing-wireless-headphones-face-in-profile-neon-pink-and-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=yTaiMU1pU5WqRFo-ktI1CdIODTYVsHgTC5AAmgV7Jns=",
        story:"https://images.unsplash.com/photo-1509518408633-d42f618a2bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG98ZW58MHx8MHx8fDA%3D"
    },
    { 
        username: 'sneha',
        dp: "https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmxzJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: 'payal',
        dp: "https://images.unsplash.com/photo-1540174401473-df5f1c06c716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHMlMjBwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1638317875669-719f70b4c27c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzJTIwd2l0aCUyMHNhcmVlfGVufDB8fDB8fHww"
    },
    {
        username: 'sejal',
        dp: "https://images.unsplash.com/photo-1529092419721-e78fb7bddfb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1700687517672-217ddb1a459a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D"
    },
    {
        username: 'priya',
        dp: "https://images.unsplash.com/photo-1582706117275-3a583eae07bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGdpcmxzfGVufDB8fDB8fHww",
        story:"https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyb3duJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D"
    }
]
let sum = ''
users.forEach(function(elem,idx){
    sum = sum + `                <div class="story">
                    <img id = ${idx} src=${elem.dp} alt="">
                </div>`
                
});
var storiyan = document.querySelector('.storiyan')
storiyan.innerHTML = sum

var full = document.querySelector('.full')
let fullh2 = document.querySelector('.full h2')
let growth = document.querySelector('#growth')
storiyan.addEventListener('click',function(dets){
    let grow = 0
    
    let gold = users[dets.target.id]
    // var story = users[dets.targer.id].story
    let interval = setInterval(function(){
        grow++
        growth.style.width = grow + '%'
    },30)

    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`
    fullh2.innerHTML = gold.username

    
    setTimeout(function(){
        clearInterval(interval)
        full.style.display = 'none'
    },3000)    
})