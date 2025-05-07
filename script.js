async function getCurrency() {
  const resp = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json");
  const data =  await resp.json();
  return console.log(data)
}

getCurrency()