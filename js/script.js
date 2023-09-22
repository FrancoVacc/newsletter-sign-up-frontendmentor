let form = document.getElementById("form")
let container = document.getElementById("container")
let res = document.getElementById("res")
let resText = document.getElementById("res-text")
let dismiss = document.getElementById("dismiss")
let email = document.getElementById("email-field")
let validText = document.getElementById("valid-text")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    let regEx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (regEx.test(email.value)) {
        console.log("pasa")

        resText.innerText = `${email.value}`
        container.classList.remove("show-b")
        res.classList.remove("not-show")
        container.classList.add("not-show")
        res.classList.add("show")
    } else {
        email.classList.add("validate")
        validText.classList.add("valid-text-show")
    }
})

dismiss.addEventListener("click", () => {
    container.classList.remove("not-show")
    res.classList.remove("show")
    container.classList.add("show-b")
    res.classList.add("not-show")
})

email.addEventListener("change", () => {
    email.classList.remove("validate")
    validText.classList.remove("valid-text-show")
})