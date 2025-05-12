const country = document.querySelectorAll(".country");
const tagName = country.name

// Get the API currencies names
async function getCurrency() {
  const resp = await fetch(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
  );
  const data = await resp.json();
  return data;
}

// Create a array with the currencie's names
async function currencyArray() {
  const objectCurrency = await getCurrency();
  const arrayCurrency = Object.keys(objectCurrency);
  return arrayCurrency;
}

// Print the currencie's names
async function boxCurrency() {
  const array = await currencyArray();
  country.forEach((select) => {
    array.forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency;
      option.textContent = currency.toUpperCase();
      select.appendChild(option);
    });
  });
}


async function currencyValue() {
  const selectCurrency = await boxCurrency()
  const currencyValue = option.textContent
  const resp = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyValue}.json`)
  const data = await resp.json()
  if (tagName == 'country-2'){
    return {value: data[currencyValue]} 
  }
  

}

country.addEventListener("change", async (e) => {
  const value2 = await currencyValue()
  tagName.textContent = value2.value
})