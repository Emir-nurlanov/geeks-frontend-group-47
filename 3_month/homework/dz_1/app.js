// Изначальные значения
let coins = 0;
let energy = 300;

// Элементы DOM
const coinsElement = document.getElementById('coins');
const energyElement = document.getElementById('energy');
const clickButton = document.getElementById('clickButton');

// Параметры для увеличения монет и уменьшения энергии
const coinsIncrease = 10;
const energyDecrease = 10;

// Обработчик клика по кнопке
clickButton.addEventListener('click', () => {
    // Проверяем, достаточно ли энергии
    if (energy >= energyDecrease) {
        // Увеличиваем монеты и уменьшаем энергию
        coins += coinsIncrease;
        energy -= energyDecrease;

        // Обновляем значения на странице
        coinsElement.textContent = coins;
        energyElement.textContent = energy;
    } else {
        alert('Недостаточно энергии для накопления монет!');
    }
});