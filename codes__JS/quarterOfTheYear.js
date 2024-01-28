/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12 */

const quarterOf = (month) => {
    if (month == 1 || month == 2 || month == 3){
      return 1;
    } else if(month == 4 || month == 5 || month == 6){
      return 2;
    } else if (month == 7 || month == 8 || month == 9){
      return 3;
    } else{
     return 4;
  }
  }

  //refatorar esse code, mas a ideia é usar o if else para comparar cada
  // numero do mes, usando || (ou) e retornar em int a que trimestre ele pertence

  /*OPÇÃO MAIS BONITA AINDA NO MESMO ESTILO DO MEU 
  
  const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}*/