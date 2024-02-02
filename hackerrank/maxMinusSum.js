/*Esse desafio pede para você criar uma função chamada miniMaxSum, que recebe 
um array de cinco inteiros positivos. A função deve calcular a soma mínima e máxima possível 
de quatro dos cinco inteiros e imprimir esses valores em uma única linha, como dois inteiros 
separados por espaço.

Entrada:

Um array de cinco inteiros positivos.
Saída:

Dois inteiros separados por espaço, representando a soma mínima e máxima possível de 
quatro dos cinco elementos do array.
Exemplo:
Se o array for [1, 2, 3, 4, 5], as somas mínima e máxima seriam:

Mínima: 1 + 2 + 3 + 4 = 10
Máxima: 2 + 3 + 4 + 5 = 14
Portanto, a função deve imprimir 10 14.*/




function miniMaxSum(arr) {
    // Ordena o array em ordem crescente
    arr.sort((a, b) => a - b);

    // Calcula a soma mínima excluindo o último elemento
    const minSum = arr.slice(0, -1).reduce((sum, num) => sum + num, 0);

    // Calcula a soma máxima excluindo o primeiro elemento
    const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);

    // Imprime os resultados
    console.log(minSum, maxSum);
}