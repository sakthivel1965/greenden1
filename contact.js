var icon=document.getElementById("menu-icon")
var sidenav=document.getElementById("side-nav")
var closenav=document.getElementById("close-nav")

icon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})