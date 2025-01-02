const users = [
    {
      profilePicture: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
      statusPicture: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
      username: "Palak Kumari",
      time: "5 minutes ago"
    },
    {
      profilePicture: "https://images.unsplash.com/photo-1594708240419-ef770d3780ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaW5lc2UlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
      statusPicture: "https://images.unsplash.com/photo-1594708240419-ef770d3780ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaW5lc2UlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
      username: "Sneha Sharma",
      time: "10 minutes ago"
    },
    {
      profilePicture: "https://images.unsplash.com/photo-1567303314286-6735a4ad9d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      statusPicture: "https://randomuser.me/api/portraits/men/3.jpg",
      username: "Sejal Reddy",
      time: "1 hour ago"
    },
    {
      profilePicture: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?a=1&b=1&s=612x612&w=0&k=20&c=u5RPl326UFf1oyrM1iLFJtqdQ3K28TdBdSaSPKeCrdc=",
      statusPicture: "https://randomuser.me/api/portraits/women/1.jpg",
      username: "Priya Gupta",
      time: "2 hours ago"
    },
    {
      profilePicture: "https://images.unsplash.com/photo-1508449405506-2f559e868bdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWFuJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
      statusPicture: "https://randomuser.me/api/portraits/men/4.jpg",
      username: "Bhoomi Singh",
      time: "3 hours ago"
    },
    {
      profilePicture: "https://images.unsplash.com/photo-1558280417-ea782f829e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a29yZWFuJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
      statusPicture: "https://randomuser.me/api/portraits/women/2.jpg",
      username: "Neha Yadav",
      time: "10 minutes ago"
    },
    {
      profilePicture: "https://images.unsplash.com/photo-1508449569416-da21a0671adb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtvcmVhbiUyMGdpcmxzfGVufDB8fDB8fHww",
      statusPicture: "https://randomuser.me/api/portraits/men/5.jpg",
      username: "Sheetal Patel",
      time: "15 minutes ago"
    },
    {
      profilePicture: "https://media.istockphoto.com/id/478949096/photo/asian-college-student-sitting-with-a-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bxd7GNxq2Cttdnf2BPegEusPsIC9pI8Bjt7Zkxh9lOw=",
      statusPicture: "https://randomuser.me/api/portraits/women/3.jpg",
      username: "Simran Kaur",
      time: "30 minutes ago"
    },
    {
      profilePicture: "https://images.unsplash.com/photo-1613272976530-ebe48380591c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbmVzZSUyMGdpcmxzfGVufDB8fDB8fHww",
      statusPicture: "https://randomuser.me/api/portraits/men/6.jpg",
      username: "Mahak Desai",
      time: "45 minutes ago"
    },
    {
      profilePicture: "https://images.unsplash.com/photo-1641922312538-9549385eb32c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbmVzZSUyMGdpcmxzfGVufDB8fDB8fHww",
      statusPicture: "https://randomuser.me/api/portraits/women/4.jpg",
      username: "Shalini Verma",
      time: "1 hour ago"
    }
  ];
  let sum = ''
  users.forEach(function(elem,idx){
    sum = sum +`<div id=${idx} class="status">
              <img src=${elem.profilePicture} alt="" />
              <div class="status-in">
                <h2>${elem.username}</h2>
                <h3>${elem.time}</h3>
              </div>
            </div>`
  })
  let allStatus = document.querySelector('.allStatus')
  let full = document.querySelector('.full')
  let fullh5 = document.querySelector('.full h5')
  let growth = document.querySelector('#growth')
  allStatus.innerHTML = sum

  allStatus.addEventListener('click',function(dets){
    let grow = 0
    gold = users[dets.target.id]
    
    let inter = setInterval(function(){
        grow++
        growth.style.width = grow +'%'
    },30)

    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.profilePicture})`
    fullh5.innerHTML = gold.username
   
    setTimeout(function(){
        clearInterval(inter)
        full.style.display = 'none'
    },3000)
  })
  
  
  