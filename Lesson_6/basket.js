'use strict'

let catalog = [
    ['Принтер PR2400', 20000],
    ['Принтер PR3500', 23000],
    ['Сканер SC2400', 15000],
    ['Сканер SC5600', 18000],
    ['Копир KO6600', 20000],
    ['Копир KO3400', 34000]
];

let basket = [];


class Basket {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };
};


function init() {
    drawCatalog();
    checkEmptyAndDrawOut();
};


function drawCatalog() {
    catalog.forEach(function (product, i) {
        drawCatalogProduct(product, i);
    });
};


const $catalogList = document.querySelector('#catalog-list');
function drawCatalogProduct(product, id) {
    let name = product[0], price = product[1];
    // отрисовка каталога с наименованием, картинкой, ценой и кнопкой Купить
    const html =
        `<div id="catalog-item-${id}" class="catalog-item">
        <p id="catalog-item__title-${id}" class="catalog-item__title">${name}</p>
        <img src="img/${name}.jpg" width="120" height="80" alt="${name}">
        <div class="catalog-price">
            <p id="catalog-price-${id}">${price}</p><p> руб.</p>
        </div>
        <button data-id="${id}" class="catalog-item__btn">Купить</button>
    </div>`
    $catalogList.insertAdjacentHTML('beforeend', html);
};


const $basketList = document.querySelector('#basket-list');
function drawBasket() {
    $basketList.textContent = '';
    basket.forEach(function (product, i) {
        drawProduct(product, i);
    });
};


const $basketOut = document.querySelector('#basket-out');
function checkEmptyAndDrawOut() {
    $basketOut.textContent = '';
    let basket_empty = `Корзина пуста`, empty = "basket-empty";
    let basket_filled = `В корзине: ${basket.length} товар(-ов) на сумму ${count_sum(basket)} рублей`, filled = "basket-out";

    if (basket.length > 0) {
        // Если корзина не пуста
        empty = filled;
        basket_empty = basket_filled;
    } else {
        $basketListClose.style.display = "none";
    };

    const html =
        `<div class=${empty}>
            <p>${basket_empty}</p>
        </div>`
    $basketOut.insertAdjacentHTML('beforeend', html);


};


function count_sum(basket) {
    var sum = 0;
    for (var i in basket) {
        sum += Number(basket[i].price)
    };
    return sum
};


function drawProduct(product, id) {
    const html =
        `<div id="item-${id}" class="basket-item">
        <p class="basket-item__title">${product.name}, цена: ${product.price}</p>
        <button data-id="${id}" class="basket-item__btn">delete</button>
    </div>`;
    $basketList.insertAdjacentHTML('beforeend', html);
};


// Кнопка Раскрыть корзину
const $basketListOpen = document.querySelector('#basket-list-open');
const $basketListClose = document.querySelector('#basket-list-close');
const $toAddressNextBtn = document.querySelector('#basket-next-btn');
const $popup = document.querySelector('#popup');
$basketListOpen.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON' && basket.length > 0) {
        $basketList.style.display = "block";
        $basketListOpen.style.display = "none";
        $basketListClose.style.display = "block";
        $toAddressNextBtn.style.display = 'block';

        $popup.style.cssText = `
        display: block;
        width: 700px;
        height: 500px;
        background-color: #ccc;
        border: 1px solid #999;
        border-radius: 6px;
        position: fixed;
        top: 100px;
        left: calc(50% - 350px);`;
    };
});


// Кнопка Скрыть
$basketListClose.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        $basketListOpen.style.display = "block";
        $basketListClose.style.display = "none";
        $basketList.style.display = "none";
        $toAddressNextBtn.style.display = 'none';
        $popup.style.display = 'none';
    };
});


// Кнопка delete
$basketList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const index = Number(e.target.dataset.id);
        basket = basket.filter(function (product, i) {
            return i !== index
        });

        $basketListOpen.style.display = "none";
        checkEmptyAndDrawOut();
        drawBasket();
    };
});


// Кнопка Купить
$catalogList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const index = Number(e.target.dataset.id);

        const $productNameInput = document.querySelector(`#catalog-item__title-${index}`);
        const $priceInput = document.querySelector(`#catalog-price-${index}`);

        const productName = $productNameInput.textContent;
        const price = $priceInput.textContent;

        basket.push(new Basket(productName, price));
        $productNameInput.value = '';
        $priceInput.value = '';

        $basketListOpen.style.display = "block";
        checkEmptyAndDrawOut();
        drawBasket();
    };
});


// Кнопки далее
const $basketInfo = document.querySelector('#basket-info');
$basketInfo.addEventListener('click', function (e) {
    const $address = document.querySelector('#address');
    const $comment = document.querySelector('#comments');
    let id = e.target.dataset.toggleId;

    if (id === 'basket-next-btn') {
        $basketList.style.display = 'none';
        $toAddressNextBtn.style.display = 'none';
        $address.style.display = 'block';
        $basketListOpen.style.display = 'block';
    };
    if (id === 'address-next-btn') {
        $address.style.display = 'none';
        $comment.style.display = 'block';
    };
    if (id === 'comment-pay-order-btn') {
        $comment.style.display = 'none';
        $popup.style.display = 'none';
        $basketListClose.style.display = 'none';
    };
});


init();