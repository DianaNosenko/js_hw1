
// 1. Определите переменные со значениями 11, true, "java script", "100" 
// и выведите их в консоль
console.log('Задача 1');
let a = 11, b = true, c = 'java script', d = '100';
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));


// 2. Создайте переменные greeting со значением'Hello, ' и userName. 
// Спросите имя пользователя и занесите данное значение в переменную userName. 
// С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.
console.log('Задача 2');
let greeting = 'Hello,', userName;
userName = prompt('Введите имя');
console.log(greeting + userName,'!');



// 3. Определите в какую четверть часа попадает ввыденное количество минут пользователем 
// (например, 40 минут - 3-я четверть часа)
console.log('Задача 3');
 let userNumber = prompt ('Введите количество минут');
 if ((userNumber >= 0)&&(userNumber <= 15)) {
     console.log(`${userNumber} минут - 1-я четверть часа`);
 } else if ((userNumber >= 16)&&(userNumber <= 30)) {
     console.log(`${userNumber} минут - 2-я четверть часа`);
 } else if ((userNumber >= 31)&&(userNumber <= 45)) {
     console.log(`${userNumber} минут - 3-я четверть часа`);
 } else if ((userNumber >= 46)&&(userNumber <= 60)) {
     console.log(`${userNumber} минут - 4-я четверть часа`);
 } else console.log(false);


// 4. Вывод чисел от 10 до 50, которые кратны 5
console.log('Задача 4');
let num = 10, amount = 0;
// циклом while
while (num <= 50) {
    if (num%5 == 0) { 
        console.log(num);
        amount++;
    } 
    num++;
    if (num > 50) break;
}
console.log(`Итого, на заданном промежутке ${amount} чисел кратных 5`);

// циклом for
// for (num; num <= 50; num++) {
//     if (num%5 == 0) {
//         console.log(num);
//         amount++;
//     }
//     if (num > 50) break;
// }
// console.log(`Итого, на заданном промежутке ${amount} чисел кратных 5`);


// 5. Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 
// то это произведение чисел от 5 до 12).
console.log('Задача 5');
 let lim1 = 5, lim2 = 12, result = 1;
// циклом while
 while (lim1 <= lim2) {
    result = result * lim1;
    lim1++;
  }
  console.log(`Произведение чисел от 5 до ${lim2} = ${result}`);

// циклом for
// for (lim1; lim1 <= lim2; lim1++) {
//     result = result * lim1;   
// }
// console.log(`Произведение чисел от 5 до ${lim2} = ${result}`);

