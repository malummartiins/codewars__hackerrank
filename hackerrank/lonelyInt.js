/*dado um array de inteiros, onde todos os elementos aparecem duas vezes, exceto um. 
Sua tarefa é encontrar esse elemento único.

Por exemplo, se tivermos um array A = [1,2,3,4,1,2,3],
 todos os números, exceto o 4, aparecem duas vezes. Portanto, o objetivo é encontrar 
 e retornar o número 4, que é o único elemento que ocorre apenas uma vez.
 
Inicialize uma variável chamada result com zero.
Itere sobre todos os elementos do array.
Aplique o XOR de cada elemento com a variável result.
No final, result conterá o valor do elemento único.*/

function lonelyinteger(a) {
    // Write your code here
    let result = 0;
    
    for (let i = 0; i < a.length; i++){
        result ^= a[i];
    }
    return result;
}