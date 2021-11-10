
/*'use strict';
var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=9OQJCDZZ9INIVFGA';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});

*/


function calcular(oper) {
    var valor1 = document.calcform.valor1.value;
    var valor2 = document.calcform.valor2.value;
 
    if (oper == "cdb") {
       var res = valor1 * Math.pow(1.0275, valor2);
       if (valor2 <=6){
            res = res - (res * 0.225);
       }
       else if (valor2 <= 12){
            res = res - (res * 0.20);
       }
       else if (valor2 <= 12){
            res = res - (res * 0.175);
       }
    } else if (oper == "tesouro") {
        var res = valor1 * Math.pow((1.0425 + 0.2328), valor2);
    } else if (oper == "lci") {
        if(valor1 < 5000){
            var res = "Valor inicial precisa ser maior que 5 mil";
            document.calcform.res.value = res;
        }
        else{
            var res = valor1 * Math.pow((1.0415 * 98 / 100), valor2);
        }
    } else if (oper == "poupanca") {
        var res = valor1 * Math.pow(1.024, valor2);
    }

    var arredondado = "R$ " + parseFloat(res.toFixed(2));
    document.calcform.res.value = arredondado;
 }