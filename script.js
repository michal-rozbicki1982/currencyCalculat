console.log("Hello my friend");

let formElement = document.querySelector(".js-form");
let fieldElement = document.querySelector(".js-field");
let currencyElement = document.querySelector(".js-currency");
let submitButton = document.querySelector(".js-submitButton");
let resultElement = document.querySelector(".js-result");
let resetButton = document.querySelector(".js-resetButton");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let rateEUR = 4.565;
  let rateUSD = 3.782;
  let rateGBP = 5.252;
  let rateCHF = 4.136;
  let rateJPY = 3.508;

  let plnAmount = +fieldElement.value;
  let currency = currencyElement.value;

  switch (currency) {
    case "EUR":
      result = (plnAmount / rateEUR).toFixed(3);
      resultElement.innerText = `${result} euro`;
      break;

    case "USD":
      result = (plnAmount / rateUSD).toFixed(3);
      resultElement.innerText = `${result} dolarów`;
      break;

    case "GBP":
      result = (plnAmount / rateGBP).toFixed(3);
      resultElement.innerText = `${result} funtów`;
      break;

    case "CHF":
      result = (plnAmount / rateCHF).toFixed(3);
      resultElement.innerText = `${result} franków`;
      break;

    case "JPY":
      result = (plnAmount / rateJPY).toFixed(3);
      resultElement.innerText = `${result} jenów`;
      break;
    default:
      resultElement.innerText = "Coś poszło nie tak";
  }

  formElement.addEventListener("reset", () => {
    resultElement.innerText = "";
    console.log("formularz został zresetowany");
  });
});
