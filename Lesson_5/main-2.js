'use strict'

let basket = [];                    // Массив корзины товаров


class Basket {
    // Класс корзины, с атрибутами наименования и цены
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}


function drawBasket() {
    // Функция отрисовки корзины
    const $basketOut = document.querySelector('#basket-list');
    $basketOut.textContent = '';
    if (basket.length == 0) {
        // Если корзина пуста, выводится соответствующее сообщение
        const $basketList = document.querySelector('#basket-list');
        $basketList.textContent = '';
        const html =
            `<div class="task-item">
                <p class="task-item__title basket-out">Корзина пуста</p>
            </div>`
        $basketList.insertAdjacentHTML('beforeend', html);
    } else {
        // Если корзина наполнена, то под списком товаров выводится сводка по всем товарам (кол-во и общая сумма)
        const $basketOut = document.querySelector('#basket-out');
        $basketOut.textContent = '';
        const html =
            `<div class="basket-out">
                <p>В корзине: ${basket.length} товар(-ов) на сумму ${count_sum(basket)} рублей</p>
            </div>`
        $basketOut.insertAdjacentHTML('beforeend', html);

        // Далее отрисовываются товары по отдельности
        basket.forEach(function (product, i) {
            drawProduct(product, i);
        })
    }
}


function drawProduct(product, id) {
    // Отрисовка товаров по отдельности
    const $basketList = document.querySelector('#basket-list');
    const html = `<div id="item-${id}" class="basket-item">
        <p class="basket-item__title">${product.title}, цена: ${product.price}</p>
        <button data-id="${id}" class="basket-item__btn">delete</button>
    </div>`
    $basketList.insertAdjacentHTML('beforeend', html);
}


const $addTaskBtn = document.querySelector('#add-task-btn');
const $newTaskInput = document.querySelector('#new-task');
const $priceInput = document.querySelector('#price');

// Создаем событие на кнопку (добавление товаров в массив, присваивая их к классу Basket)
$addTaskBtn.addEventListener('click', function () {
    basket.push(new Basket($newTaskInput.value, $priceInput.value));
    // после внесения в массив, очищаем строку ввода
    $newTaskInput.value = '';
    $priceInput.value = '';
    drawBasket();
});


// Кнопка delete
const $basketList = document.querySelector('#basket-list');
$basketList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const index = Number(e.target.dataset.id);
        basket = basket.filter(function (product, i) {
            return i !== index
        });
        drawBasket();
    }
})


function count_sum(basket) {
    // Функция подсчета общей суммы корзины
    var sum = 0;
    for (var i in basket) {
        sum += Number(basket[i].price)
    }
    return sum
}

drawBasket();