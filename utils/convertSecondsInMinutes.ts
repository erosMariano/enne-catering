export function convertSecondsInMinutes(value: number) {
  const hour = String(Math.trunc(value / 60)).padStart(2, '0');
  const calculeMin = value % 60;
  const min = calculeMin ? 'e ' + calculeMin + 'min' : '';

  if (value < 60) {
    return `${value}min`;
  } else {
    return `${hour}${Number(hour) > 1 ? 'hrs' : 'hr'} ${min}`;
  }
}
