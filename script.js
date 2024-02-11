var list = document.querySelectorAll(".side-mainu li")
var sidediv = document.querySelector("#sidediv")
list.forEach(function(elem){
    elem.addEventListener("click", function(){
        sidediv.style.display = "block"
        list.style.display = "none"
    })
})