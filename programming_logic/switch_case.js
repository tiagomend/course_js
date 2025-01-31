const date = new Date();
const weekDay = date.getDay();
let weekDayString;

switch (weekDay) {
  case 0:
    weekDayString = 'Domingo';
    break;
  case 1:
    weekDayString = 'Segunda-feira';
    break;
  case 2:
    weekDayString = 'Terça-feira';
  case 3:
    weekDayString = 'Quarta-feira';
    break;
  case 4:
    weekDayString = 'Quinta-feira';
    break;
  case 5:
    weekDayString = 'Sexta-feira';
    break;
  case 5:
    weekDayString = 'Sábado';
    break;
  default:
    weekDayString = '';
    break;
}

console.log(weekDayString);