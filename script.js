const country = document.querySelector(".country");

// Get the API currencies names
async function getCurrency() {
  const resp = await fetch(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
  );
  const data = await resp.json();
  return data;
}

// Create a array with the currencie's names
async function CurrencyArray() {
  const objectCurrency = await getCurrency();
  const arrayCurrency = Object.keys(objectCurrency);
  return arrayCurrency;
}

// Print the currencie's names
async function boxCurrency() {
  const array = await CurrencyArray();
  for (let i = 0; i < array.length; i++) {
    const optionSelect = document.createElement("option");
    // optionSelect.setAttribute("value", `value${i}`);
    optionSelect.value = array[i];
    optionSelect.textContent = array[i].toUpperCase()
    country.appendChild(optionSelect)
  }
}

boxCurrency();

