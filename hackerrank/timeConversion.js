/*Esse desafio pede para você criar uma função chamada timeConversion que recebe uma string 
representando uma hora no formato de 12 horas (AM/PM) e retorna essa hora no formato de 24 horas.

Entrada:

Uma string s representando uma hora no formato "hh:mm:ssAM" ou "hh:mm:ssPM", onde hh é a hora em formato 
de 1 ou 2 dígitos, mm são os minutos e ss são os segundos.
Saída:

Uma string representando a mesma hora no formato de 24 horas.
Exemplo:
Se a entrada for '07:05:45PM', a função deve retornar '19:05:45'.*/

function timeConversion(s) {

const timeArray = s.split(":");

    let hour = parseInt(timeArray[0], 10);
    const minutes = timeArray[1];
    const secondsAndPeriod = timeArray[2].split(/([AaPp][Mm])/);
    const seconds = secondsAndPeriod[0];
    const period = secondsAndPeriod[1].toUpperCase();

    
    if (period === 'PM' && hour !== 12) {
        hour += 12;
    } else if (period === 'AM' && hour === 12) {
        hour = 0;
    }

   
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinutes = minutes.padStart(2, '0');
    const formattedSeconds = seconds.padStart(2, '0');

 
    return `${formattedHour}:${formattedMinutes}:${formattedSeconds}`;

}