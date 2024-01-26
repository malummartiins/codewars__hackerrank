/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...] */

function removeEveryOther(arr){
  
    let result = arr.filter(function(_,index){  //metodo filter() para criar um novo array
                                                // O filter percorre cada elemento do array e executa a função fornecida como argumento.
      return index % 2 === 0;                  // retorna true para manter os elementos em posições impares

    })
    return result;
  }



  /**Outra forma de resolver, nao tao clean quando a que 
   * fiz mas que tem tudo haver com os ultimos estudos:
   * 
   * function removeEveryOther(arr){
        var newArr=[];
        for (var i = 0; i < arr.length; i+=2){
            newArr.push(arr[i]);
        }
        return newArr;
    }
   */
