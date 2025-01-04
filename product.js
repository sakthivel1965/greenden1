var icon = document.getElementById("menu-icon")
var sidenav = document.getElementById("side-nav")
var closenav = document.getElementById("close-nav")

icon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


var search = document.getElementById("search")
var productelement = document.getElementById("container")
var products = productelement.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var values = event.target.value.toUpperCase()


    for (count = 0; count < products.length; count++) 
    {
        var productname = products[count].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(values) < 0) {
            products[count].style.display = "none"
        }
        else {
            products[count].style.display = "block"
        }
    }

}
)