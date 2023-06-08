const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const error = document.querySelector(".error")

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



btn.addEventListener("click", function (e) {
    e.preventDefault()
    if (input.value.length === 0) {
        error.classList.add("d-block")
    } else if (!input.value.match(validRegex)) {
        error.classList.add("d-block")
    } else if (input.value.match(validRegex)) {
        input.value = ""
        error.classList.remove("d-block")
    }
})