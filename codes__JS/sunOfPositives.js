/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

RESUMO: SOMA OS ITENS POSITIVOS DO ARRAY */

function positiveSum(arr) {
    let total = 0
    for(i=0;i < arr.length; i++){           //um loop para percorrer um array do tamanho que for dado
      if(arr[i] > 0){                       // se o array (arr) for maior que 0
        total += arr[i];                    // add arr[i] ao total
      }
    }
    return total
    
  }