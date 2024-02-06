/*There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Example
string = ['ab','ab','abc']
querys = ['ab','abc','ab']

There are  instances of ',  of '' and  of ''. For each query, add an element to the return array, .

Function Description

Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:

string strings[n] - an array of strings to search
string queries[q] - an array of query strings
Returns

int[q]: an array of results for each query

Input Format

The first line contains and integer n , the size of strings[]
Each of the next n  lines contains a string strings[i]
The next line contains q , the size of queries[]
Each of the next q lines contains a string queries[i]*/

/*RESUMINDO: você precisa escrever uma função chamada matchingStrings que aceita duas listas de strings como 
entrada e retorna uma lista de inteiros representando a frequência de ocorrência de cada string de consulta na lista de entrada.*/

function matchingStrings(strings, queries) {
    const results = [];

 
   for (const query of queries) {
   const count = strings.filter(str => str === query).length;
   results.push(count);
 }

 return results;

}