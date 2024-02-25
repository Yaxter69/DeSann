const Burger = document.querySelector(".burger");
const Cross = document.querySelector(".cross");
const square = document.querySelector(".square");

Burger.addEventListener("click", function () {
    square.classList.toggle("open")
})

Cross.addEventListener("click", function () {
    square.classList.remove("open")
}) 


