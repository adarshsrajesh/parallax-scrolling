let avatar = document.getElementById('avatarimage')
let quote =document.getElementById('quote')
let icon = document.getElementById('iconimage')
let smoke = document.getElementById('smokeimage')



window.addEventListener('scroll' ,() => {

    let a = window.scrollY


    avatar.style.top = a*(.3)+'px'
    quote.style.top = a*(.3)+'px'
    icon.style.left=a*(-.1)+'px'
 
    
   

})