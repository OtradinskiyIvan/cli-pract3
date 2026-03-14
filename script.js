// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Находим все кнопки с классом "button"
    const buttons = document.querySelectorAll('.button');
    
    // Добавляем обработчик для каждой кнопки
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Предотвращаем стандартное действие (если нужно)
            //event.preventDefault();
            
            // Определяем, какой товар был нажат
            const productDiv = this.closest('.product');
            const productName = productDiv.querySelector('h1').textContent;
            
            // Действия при добавлении в корзину
            alert(`✅ ${productName} добавлен в корзину!`);
            
            // Меняем внешний вид кнопки
            this.style.backgroundColor = '#4CAF50';
            this.textContent = '✓ В корзине';
            
            // Возвращаем исходный вид через 2 секунды
            setTimeout(() => {
                this.style.backgroundColor = '';
                this.textContent = 'Добавить в корзину';
            }, 2000);
            
            // Выводим информацию в консоль
            console.log(`Добавлен товар: ${productName}`);
        });
    });
});

const cart = []


function caclTotal(array) {
    var total_sum = 0
    array.forEach(element => {
        total_sum += element.price
    });
}