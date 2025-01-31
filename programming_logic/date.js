const now = new Date();
console.log(now.toString());

// Um único parametro será considerado milésimo de segundos
const timestamp_unix = new Date(0);
console.log(timestamp_unix.toString());

const date =  new Date(2019, 3, 20, 15, 14, 27, 999);
console.log(date.toString());

const dateStr = new Date('2019-04-20 20:20:59.500');
console.log(dateStr.toString());

console.log('Dia:', dateStr.getDate());
console.log('Mês:', dateStr.getMonth()); // Inicia no 0 - Janeiro
console.log('Ano:', dateStr.getFullYear());
console.log('Hora:', dateStr.getHours());
console.log('Min:', dateStr.getMinutes());
console.log('Seg:', dateStr.getSeconds());
console.log('Ms:', dateStr.getMilliseconds());
console.log('Dia semana:', dateStr.getDay()); // Inicia no 0 - Domingo

function zeroToLeft(number){
  return number >= 10 ? number : `0${number}`;
}

function dateFormat(date){
  const day = zeroToLeft(date.getDate());
  const month = zeroToLeft(date.getMonth() + 1);
  const year = zeroToLeft(date.getFullYear());
  const hours = zeroToLeft(date.getHours());
  const min = zeroToLeft(date.getMinutes());
  const seconds = zeroToLeft(date.getSeconds());
  return `${day}/${month}/${year} ${hours}:${min}:${seconds}`;
}

console.log(dateFormat(new Date()));