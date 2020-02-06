let input;
const numbers = [];
let total = 0;
while (true) {
  input = prompt('Укажите число к общей сумме:');
  if (input === null) {
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(input);
}
for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
