/*Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great */

function smash (words) {
    return words.join(" ");
 };

 /*
 O método join é uma função nativa do JavaScript que permite unir os elementos de um array em uma única string. A sintaxe do método join é simples: primeiro precisamos acessar o array desejado e em seguida chamamos o método join utilizando o separador desejado como argumento.

Por exemplo, suponha que temos um array de frutas: [“maçã”, “banana”, “laranja”]. Para unir esses elementos em uma única string, podemos usar o método join da seguinte maneira:

const frutas = ["maçã", "banana", "laranja"];
const resultado = frutas.join(", ");
console.log(resultado); // Output: maçã, banana, laranja
Como podemos observar, o método join recebe como argumento o separador desejado. 

*/