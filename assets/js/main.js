console.log("Entro al main.js");

var myHeaders = new Headers();
myHeaders.append("apikey", "tph4C1O9tNLexo1DwXLmWWw4WRcBKVkB");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/convert?to={to}&from={from}&amount={amount}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));