/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  " */

function doubleChar(str) {
    let result = "";                   //inicializa uma string vazia p/ armazenar o resultado
    
    for(i=0; i < str.length; i++){   //itera sobre cada caractere na string usando for
      result += str[i] + str[i];    //concatena o caractere atual duas vezes ao resultado
    }
    return result;                //retorna o resultado final com cada caractere repetido uma vez. 
  }
  