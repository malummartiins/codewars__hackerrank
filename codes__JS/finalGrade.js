/*Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for 
the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - 
number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases

Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*Use Comparison and Logical Operators. 

function finalGrade (exam, projects) {
  
    if (exam > 90  || projects > 10 ){
      return 100;
      
    } else if (exam > 75 &&  projects >= 5) {
      return 90;
      
    } else if ( exam > 50  && projects >= 2) {
      return 75;
      
    } else {
      return 0;
    }
}

***********************************************

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */


function betterThanAverage(classPoints, yourPoints) {

    
    const mediaDaClasse = calcularMedia(classPoints); //nota da sala sem a minha

    
    const novaSoma = calcularSomaTotal(classPoints) + yourPoints; //agora cm a minha juntp
    const numeroDeEstudantes = classPoints.length + 1;

    const novaMedia = novaSoma / numeroDeEstudantes; //media atualizada com a minha nota 

    
    const estouMelhorQueMedia = yourPoints > novaMedia; //comparando minha nota com a mpedia

    return estouMelhorQueMedia;
}

// Função auxiliar para calcular a média
function calcularMedia(notas) {
    const soma = calcularSomaTotal(notas);
    const media = soma / notas.length;
    return media;
}

// Função auxiliar para calcular a soma total
function calcularSomaTotal(notas) {
    const soma = notas.reduce((total, yourPoints) => total + yourPoints, 0);
    return soma;
}

/* comparar com essa forma de resolver, que era + parecida com como
iniciei para fazer e apaguei:

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}*/














