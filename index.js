// Вивести на сторінку в один рядок через кому числа від 10 до 20

for (let i = 10; i <= 20; i++) {
  if (i < 20) {
    document.write(i + ", ");
  } else {
    document.write(i);
  }
}

// Вивести квадрати чисел від 10 до 20

for (let i = 10; i <= 20; i++) {
  let squareNum = i * i;
  document.write("<br>" + squareNum);
}

// Вивести таблицю множення на 7

const num = 7;

for (let i = 1; i <= 10; i++) {
  const result = num * i;
  document.write(`<br>${num} x ${i} = ${result}`);
}

// Знайти суму всіх цілих чисел від 1 до 15

let start = 1;
let end = 15;
let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}

document.write(`<br>Сума всіх чисел від ${start} до ${end} дорівнює: ${sum}`);

// Знайти добуток усіх цілих чисел від 15 до 35

let start1 = 15;
let end1 = 35;
let product = 1;

for (let i = start1; i <= end1; i++) {
  product *= i;
}

document.write(
  `<br>Добуток усіх цілих чисел від ${start1} до ${end1} дорівнює: ${product}`
);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let start2 = 1;
let end2 = 500;
let sum2 = 0;

for (let i = start2; i <= end2; i++) {
  sum2 += i;
}

let arithmeticAverage = sum2 / (end2 - start2 + 1);

document.write(
  `<br>Середнє арифметичне всіх цілих чисел від ${start2} до ${end2} дорівнює: ${arithmeticAverage}`
);

// Вивести суму лише парних чисел у діапазоні від 30 до 80

let start3 = 30;
let end3 = 80;
let sum3 = 0;

for (let i = start3; i <= end3; i++) {
  if (i % 2 === 0) {
    sum3 += i;
  }
}

document.write(
  `<br> Сума лише всіх парних чисел від ${start3} до ${end3} дорівнює: ${sum3}`
);

// Вивести всі числа в діапазоні від 100 до 200 / 3

document.write(`<br> Всі числа в діапазоні від 100 до 200 кратні трьом: <br>`);

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    document.write(i + " ");
  }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let number = 144;

document.write(`<br> Дільники числа: ${number} <br>`);

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    document.write(i + " ");
  }
}

// Визначити кількість його парних дільників

let number1 = 144;
let count = 0;

for (let i = 1; i <= number1; i++) {
  if (number1 % i === 0 && i % 2 === 0) {
    count++;
  }
}

document.write(`<br> Кількість парних дільників числа ${number1}: ${count}`);

// Знайти суму його парних дільників

let numSum = 144;
let sumDigit = 0;

for (let i = 1; i <= numSum; i++) {
  if (numSum % i === 0 && i % 2 === 0) {
    sumDigit += i;
  }
}

document.write(`<br> Сума парних дільників числа ${numSum}: ${sumDigit}`);

// Надрукувати повну таблицю множення від 1 до 10

document.write("<table>");

for (let i = 1; i <= 10; i++) {
  document.write("<tr>");

  for (let j = 1; j <= 10; j++) {
    document.write(`<td>${i * j}</td>`);
  }
  document.write("</tr>");
}

document.write("</table>");
