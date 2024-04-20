// regex pertama
let regexInputfarhan = document.querySelector("#regexInputfarhan");
let validationTextfarhan = document.querySelector("#validation-text-farhan");

const REGULAR_EXPRESSION = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/;

regexInputfarhan.addEventListener("input", function() {
    validationTextfarhan.innerHTML = REGULAR_EXPRESSION.test(regexInputfarhan.value) 
    ? "Valid" : "Invalid, minimum of 8 characters and a combination of letters, numbers, and special characters, with at least one number, one special character, and one letter.";
});

// regex kedua
let regexInputfarhan2 = document.querySelector("#regexInputfarhan2");
let validationTextfarhan2 = document.querySelector("#validation-text-farhan2");

const REGULAR_EXPRESSION_2 = /^(?:[^A-Z\d]*[a-z]){12}[^A-Z\d]*$/;

regexInputfarhan2.addEventListener("input", function() {
    validationTextfarhan2.innerHTML = REGULAR_EXPRESSION_2.test(regexInputfarhan2.value) 
    ? "Valid" : "Invalid, minimum 12 characters required with only lowercase letters.";
});

// regex ketiga
let regexInputfarhan3 = document.querySelector("#regexInputfarhan3");
let validationTextfarhan3 = document.querySelector("#validation-text-farhan3");

const REGULAR_EXPRESSION_3 = /^\d{4,8}$/;

regexInputfarhan3.addEventListener("input", function() {
    validationTextfarhan3.textContent = REGULAR_EXPRESSION_3.test(regexInputfarhan3.value) 
    ? "Valid" : "Invalid, minimum 4 characters and maximum 8 characters with only numbers.";
});

// regex keempat
let regexInputfarhan4 = document.querySelector("#regexInputfarhan4");
let validationTextfarhan4 = document.querySelector("#validation-text-farhan4");

const REGULAR_EXPRESSION_4 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{12,}$/;

regexInputfarhan4.addEventListener("input", function() {
    validationTextfarhan4.textContent = REGULAR_EXPRESSION_4.test(regexInputfarhan4.value) 
    ? "Valid" : "Invalid, minimum 12 characters with at least one uppercase letter, one lowercase letter, one number, one special character.";
});

// regex kelima
let regexInputfarhan5 = document.querySelector("#regexInputfarhan5");
let validationTextfarhan5 = document.querySelector("#validation-text-farhan5");

const REGULAR_EXPRESSION_5 = /^\d{6}$/;

regexInputfarhan5.addEventListener("input", function() {
    validationTextfarhan5.textContent = REGULAR_EXPRESSION_5.test(regexInputfarhan5.value) 
    ? "Valid" : "Invalid, 6 digits numbers only.";
});
