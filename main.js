'use strict'

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

console.log('Задание 1:')
var x = 0;
while (x <= 100) {
    console.log(x)
    x += 1
};

// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// Создаем массив корзины покупок
let shopping_basket = [
    ['Клавиатура 1', 1000],
    ['Клавиатура 2', 1500],
    ['Монитор 1', 54000],
    ['Принтер 1', 12000],
    ['Принтер 2', 20000]
];

// Добавим запись с помощью push
shopping_basket.push(['Клавиатура 3', 1000])

// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(lst) {
    var count_sum = 0
    var price_idx = 1
    for (var i in lst) {
        count_sum += lst[i][price_idx]
    }
    return count_sum
};

console.log('Задание 2-3:')
console.log(countBasketPrice(shopping_basket));

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
console.log('Задание 4*:')
for (let i = 0; i < 10; console.log(i++)) { };

// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
// только у вашей пирамиды должно быть 20 рядов, а не 5:

console.log('Задание 5:')
for (let i = ''; i.length < 20; console.log(i += 'x')) { };