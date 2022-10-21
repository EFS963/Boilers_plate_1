console.log("Entro al main.js")
var myHeaders = new Headers();
myHeaders.append("apikey", "tph4C1O9tNLexo1DwXLmWWw4WRcBKVkB");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
}

//fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
    fetch("https://api.apilayer.com/fixer/latest?symbols=MXN,EUR,GBP,CAD,KWD,GTQ,CNY&base=USD", requestOptions)//
    //fetch("https://api.apilayer.com/fixer/convert?base=USD&symbols=EUR", requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('error', error));

