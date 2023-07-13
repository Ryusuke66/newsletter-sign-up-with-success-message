let form  = document.querySelector("form"),
    input = document.querySelector("input"),
    frontCard = document.querySelector(".front"),
    backCard = document.querySelector(".back"),
    description = document.querySelector(".back p"),
    error = document.querySelector(".error");

form.addEventListener("submit", function() {
    if (!input.checkValidity() || input.value === "") {
        input.classList.add("invalid");
        error.style.display = "block";
    } else {
        input.classList.remove("invalid");
        error.style.display = "none";
        frontCard.classList.add("front-flip");
        backCard.classList.add("back-flip");
        description.innerHTML = `A confirmation email has been sent to <b>${input.value}</b>. Please open it and click the button inside to confirm your subscription.`;
    }
});