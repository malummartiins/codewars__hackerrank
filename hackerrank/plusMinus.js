/*Esse desafio pede para você criar uma função chamada `plusMinus`, que recebe um array de inteiros como parâmetro. 
A função deve calcular e imprimir as proporções de elementos positivos, negativos e zeros no array, com uma precisão específica.

- **Entrada:**
  - Um número inteiro `n` que representa o tamanho do array.
  - Um array de `n` inteiros.

- **Saída:**
  - Três linhas de saída, cada uma representando a proporção de valores positivos, negativos e zeros no array, respectivamente. 
  Cada valor deve ser impresso com uma precisão de `6` casas decimais.

A proporção de valores positivos é calculada dividindo o número de elementos positivos pelo total de elementos no array. 
O mesmo princípio se aplica à proporção de valores negativos e zeros.

Exemplo:
Se o array for `[1, -2, 0, 3, -1]`, há um positivo, dois negativos e um zero. As proporções seriam:
- Proporção de positivos: `1/5 = 0.200000`
- Proporção de negativos: `2/5 = 0.400000`
- Proporção de zeros: `1/5 = 0.200000`

Essas proporções devem ser impressas com uma precisão de seis casas decimais, como indicado no exemplo do desafio.

A função não precisa retornar um valor, apenas imprimir as proporções conforme especificado.*/

function plusMinus(arr) {
    // Inicialize contadores para positivos, negativos e zeros
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    // Iterar sobre o array e contar os positivos, negativos e zeros
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;  //se for maior que zero entra no positivo
        } else if (arr[i] < 0) {
            negativeCount++;  // se for menor que zero entra no negativo
        } else {
            zeroCount++;     // se for zero fica na contagem do zero
        }
    }

    // Calcular as proporções
    const total = arr.length; //é o tamanho total do array
    const positiveRatio = positiveCount / total;   //positvos dividos pelo num total do array
    const negativeRatio = negativeCount / total;
    const zeroRatio = zeroCount / total;

    // Imprimir as proporções com 6 casas decimais
    console.log(positiveRatio.toFixed(6));  //toFixed para colocar as casas decimais
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}
