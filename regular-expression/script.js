let regexInputfarhan = document.querySelector("#regexInputfarhan");
let validationTextfarhan = document.querySelector("#validation-text-farhan");

const REGULAR_EXPRESSION = /^[a-zA-Z0-9@#$%^&+=*!()-_]{8,}$/;

regexInputfarhan.addEventListener("input", function() {
    validationTextfarhan.innerHTML = REGULAR_EXPRESSION.test(regexInputfarhan.value) 
    ? "<p class='text-green-600'>Valid</p>" : "<p class='text-red-600'>Invalid</p>";
});