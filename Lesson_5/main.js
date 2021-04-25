'use strict'

// Список цифр, который будем использовать как итерируемый.
// Длина равна количеству рядов, включая строки ABCDEFGH
let numberList = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function drawRows() {
    // Функция вызывает функцию отрисовки строк столько раз, чему равна длина списка numberList
    const $numberList = document.querySelector('#number-list');
    $numberList.textContent = '';
    numberList.forEach(function (number, i) {
        drawRow(number, i);
    })
}


function drawRow(number, id) {
    // Функция отрисовки каждой строки

    // Условие выполняется, если перед нами игровое поле
    if (id > 0 && id < 9) {
        let cell_colors;
        if (id % 2 == 0) {                      // четные строки
            cell_colors = ['white', 'black']
        } else {                                // нечетные (начинаются с черного цвета)
            cell_colors = ['black', 'white']
        }

        // Фигуры изначально имеют пустые значения
        let chessmen = { 'Ладья': '', 'Конь': '', 'Офицер': '', 'Королева': '', 'Король': '', 'Пешка': '' };
        // Для первой и последней строки игрового поля фигуры равны сами себе
        if (id == 1 || id == 8) {
            chessmen = {
                'Ладья': 'rook', 'Конь': 'hourse', 'Офицер': 'officer',
                'Королева': 'queen', 'Король': 'king', 'Пешка': 'pawn'
            }
        }
        // Условие для строк, на которых должны стоять пешки
        if (id == 2 || id == 7) {
            chessmen = {
                'Ладья': 'pawn', 'Конь': 'pawn', 'Офицер': 'pawn', 'Королева': 'pawn',
                'Король': 'pawn', 'Пешка': 'pawn'
            }
        }
        // html код, в котором назначается класс цвета (по массиву) и класс фигуры (по словарю)
        // Класс фигуры имеет background-image
        const html =
            `<div id="item-${id}" class="number-item">
                <p class="number_item">${number}</p>
                <p class="cell_item ${cell_colors[0]} ${chessmen['Ладья']}"></p>
                <p class="cell_item ${cell_colors[1]} ${chessmen['Конь']}"></p>
                <p class="cell_item ${cell_colors[0]} ${chessmen['Офицер']}"></p>
                <p class="cell_item ${cell_colors[1]} ${chessmen['Королева']}"></p>
                <p class="cell_item ${cell_colors[0]} ${chessmen['Король']}"></p>
                <p class="cell_item ${cell_colors[1]} ${chessmen['Офицер']}"></p>
                <p class="cell_item ${cell_colors[0]} ${chessmen['Конь']}"></p>
                <p class="cell_item ${cell_colors[1]} ${chessmen['Ладья']}"></p>
                <p class="number_item">${number}</p>
            </div>`

        const $numberList = document.querySelector('#number-list');
        $numberList.insertAdjacentHTML('beforeend', html);

    } else {
        // Условия для нулевых строк (за пределами игрового поля)
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        const html =
            `<div id="item-${id}" class="number-item">
                <p class="number_item"></p>
                <p class="cell_item">${letters[0]}</p>
                <p class="cell_item">${letters[1]}</p>
                <p class="cell_item">${letters[2]}</p>
                <p class="cell_item">${letters[3]}</p>
                <p class="cell_item">${letters[4]}</p>
                <p class="cell_item">${letters[5]}</p>
                <p class="cell_item">${letters[6]}</p>
                <p class="cell_item">${letters[7]}</p>
                <p class="number_item"></p>
            </div>`

        const $numberList = document.querySelector('#number-list');
        $numberList.insertAdjacentHTML('beforeend', html);
    }
}


drawRows();