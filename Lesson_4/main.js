'use strict'

// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, надо получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


class To_object {
    constructor(единицы, десятки, сотни) {
        this.единицы = Number(единицы);
        this.десятки = Number(десятки);
        this.сотни = Number(сотни);
    }
}


function numbers_transformation(number) {
    if (number > 999) {
        console.log(`Число ${number} больше, чем 999.`)
        let empty_obj = new To_object()
        return empty_obj
    } else {
        number = String(number)
        let new_transform;
        if (number.length == 3) {
            new_transform = new To_object(number[2], number[1], number[0])
        }
        if (number.length == 2) {
            new_transform = new To_object(number[1], number[0], 0)
        }
        if (number.length == 1) {
            new_transform = new To_object(number[0], 0, 0)
        }
        return new_transform
    }
}


var number_1 = 1000;
var number_2 = 245;
var number_3 = 12;
var number_4 = 7;

var number_1_transform = numbers_transformation(number_1)
var number_2_transform = numbers_transformation(number_2)
var number_3_transform = numbers_transformation(number_3)
var number_4_transform = numbers_transformation(number_4)

console.log(number_1_transform)
console.log(number_2_transform)
console.log(number_3_transform)
console.log(number_4_transform)


// 2.Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.


class OfficeProduct {
    // Класс Офисной продукции, потомками которого могут стать Процессоры (Принтеры, Мониторы...):
    constructor(type, group_size) {
        this.type = type;
        this.group_size = group_size;
        this.info = 'Офисная продукция'     // атрибут для всей офисной техники
    }

}


class Monitors extends OfficeProduct {
    // Класс Мониторов
    constructor(name, diagonal, display, type, group_size, price) {
        super(type, group_size)     // атрибуты типа и группы размеров наследуются от Офисной продукции
        this.name = name;
        this.diagonal = diagonal;
        this.display = display;
        this.price = price;
    }
}


class CPU extends OfficeProduct {
    // Класс Процессоров
    constructor(name, speed, cores, type, group_size, price) {
        super(type, group_size)     // атрибуты типа и группы размеров наследуются от Офисной продукции
        this.name = name;
        this.speed = speed;
        this.cores = cores;
        this.price = price;
    }
}


class Basket extends OfficeProduct {
    // Класс Корзины
    constructor(type) {
        super(type)
        this.basket_lst = [];       // массив Корзины. Атрибуты будут перезаписываться, а массив пополняться
    }

    function(type, name, price, qty) {
        // функция добавления товара в массив Корзины
        // товар составляется из принятых на вход функции атрибутов созданных заранее продуктов
        var new_product = [type, name, price, qty]
        this.basket_lst.push(new_product)
    }

    total_basket() {
        var total = 0;
        for (var prod in this.basket_lst) {
            var price_p = this.basket_lst[prod][2];
            var qty_p = this.basket_lst[prod][3];
            total += price_p * qty_p;
        }
        return total
    }
}

// Создаем продукты
let product_1 = new CPU('Процессор Intel Core i3', 1300, 2, 'CPU', 'Small', 32000);
let product_2 = new Monitors('Монитор Asus`17', 17, '1366x768', 'MON', 'Big', 56000);

// Создаем корзину и кладем в нее наши продукты
let basket_1 = new Basket();
basket_1.function(product_1.type, product_1.name, product_1.price, 8)
basket_1.function(product_2.type, product_2.name, product_2.price, 12)

// Делаем подсчет корзины
let total_basket_1 = basket_1.total_basket();

// Вывод результата
console.log('----------Задание 2---------')
console.log('Атрибуты Продукта 1:')
console.log(product_1)
console.log(`Тип продукта 1: ${product_1.type}`)
console.log('Массив Корзины 1:')
console.log(basket_1.basket_lst)
console.log(`Сумма покупки составила: ${total_basket_1}`)
