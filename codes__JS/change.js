/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list. */

function invert(array) {
    const values = []; //array para guardar os results
    
    array.forEach(function(num){ //itero cada elemento no array
      values.push(-num);// calcular o inverso do numero e add no array de results
    })
    return values; //retorna o array final com os valores inversos
  }