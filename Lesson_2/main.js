// Из-за установленных расширений перестал работать alert. Использую вместо него console.log

// 1. Дан код:
var a = 1, b = 1, c, d;

console.log('Задание 1:')
c = ++a; console.log(c);        // 2
// Префикс увеличивает переменную 'а' на 1 ПЕРЕД присваиванием ее к переменной 'c'.
// Переменная 'c' становится обновленной переменной 'a', то есть 2.

d = b++; console.log(d);        // 1
// Постфикс наоборот, увеличивает переменную b ПОСЛЕ выполнения операции присваивания.
// Поэтому d присваивает первоначальное значение b (где b = 1), после чего b принимает значение 2.


c = (2 + ++a); console.log(c);  // 5
// В данном случае выражение будет выглядеть следующим образом: a = 2 + 1, c = 2 + a, где a = 3.
// Значение переменной 'a' увеличивается ПЕРЕД выполнением операции сложения благодаря префиксу.


d = (2 + b++); console.log(d);  // 4
// В данном случае выражение будет выглядеть следующим образом: d = 2 + 2, b = 2 + 1, так как значение
// переменной b увеличивается ПОСЛЕ операции сложения благодаря постфиксу.

console.log(a);                 // 3
console.log(b);                 // 3
// Значения обеих переменных было увеличено дважды.


// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
console.log('Задание 2:')
console.log(x)

// Значение 'a' будет увеличено в 2 раза. Выражение примет вид: x = 1 + (2 * 2), Ответ: 5

// 3. Задание
var a = -1, b = 6;

function operation(a, b) {
    if ((a >= 0) && (b >= 0))
        return a - b;

    if ((a < 0) && (b < 0))
        return a * b;

    if (((a >= 0) && (b < 0)) || ((a < 0) && (b >= 0)))
        return a + b;
}

console.log('Задание 3:')
console.log(operation(a, b))

// 4. Задание
var a = 7;
console.log('Задание 4:')

switch (a) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        break;
}

// 5 задание
console.log('Задание 5:')

function plus_o(x, y) {
    return x + y;
}

function minus_o(x, y) {
    return x - y;
}

function mul_o(x, y) {
    return x * y;
}

function div_o(x, y) {
    return x / y;
}

var a = 8, b = 2;

console.log(plus_o(a, b));
console.log(minus_o(a, b));
console.log(mul_o(a, b));
console.log(div_o(a, b));

// Задание 6
console.log('Задание 6:')

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return plus_o(arg1, arg2);
        case '-':
            return minus_o(arg1, arg2);
        case '*':
            return mul_o(arg1, arg2);
        case '/':
            return div_o(arg1, arg2);
    }
}

console.log(mathOperation(2, 3, '+'))
console.log(mathOperation(10, 2, '-'))
console.log(mathOperation(6, 3, '*'))
console.log(mathOperation(12, 6, '/'))

// Задание 7
console.log('Задание 7:')

console.log(null > 0)
console.log(null < 0)
console.log(null == 0)
console.log(null >= 0)
console.log(null <= 0)
console.log(null != 0)

// Ответ: null ни больше, ни меньше нуля. Оно - не равно нулю, но может быть рассмотрено как 0 при >= или <=.

// Задание 8
console.log('Задание 8:')

function power(val, pow) {
    if (pow == 1)
        return val;
    return val * power(val, pow - 1);
}

console.log(power(3, 3))