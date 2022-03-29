const user = {
    name: 'Alex',
    surname: 'Podolnitskiy',
    fullname() {
        console.log(`${this.name} ${this.surname}`)
        return `${this.name} ${this.surname}`
    },
    age: 29,
    skills: ['PHP', 'JS', 'HTML', 'CSS'],
    experience: 18,
    progress: '40%',
    showExperience () {
        console.info(this.experience + ' months')
        console.info(+this.experience / 12 + ' years')
    }
}

user.fullname();
user.showExperience();
class Calculator {
    
        
}


let result = document.querySelector('#result');

const div = document.createElement('div')

div.classList.add('keyboard');
document.querySelector('#calculator').appendChild(div);

// button line 'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='

'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='.split(' ').map( symbol => {
    div.insertAdjacentHTML('beforeend', `<button class='button' value=${symbol}> ${symbol} </button>`)
})

document.querySelectorAll('.button').forEach (button => {
    button.addEventListener('click', function () {
        calc(this.value);
    })
})

// ввод цифр с клавиатуры
document.addEventListener('keydown', event => {
    console.log(event)
    if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) {
        calc(event.key);
    } else {
        console.log(event.key, 'wrong')
    }
})

// функция принимает значение кнопки или ключ клавиши
function calc(value) {
    // если нажат знак равенства или Enter
    if (value.match(/=|Enter/)) {
        // пробуем выполнить операцию
        try {
            // вычисляем значение строки
            // это возможно благодаря методу "evaluate" объекта "math"
            // Math.trunc используется для округления до целого числа
            result.textContent = Math.trunc(math.evaluate(result.textContent))
            console.log(result.textContent)
            
        // если операцию выполнить невозможно
        } catch {
            // сохраняем значение поля
            let oldValue = result.textContent
            // создаем новую переменную
            let newValue = 'недопустимое выражение'
            // выводим значение новой переменной в поле
            result.textContent = newValue
            // через полторы секунды возвращаем полю старое значение
            setTimeout(() => {
                result.textContent = oldValue
            }, 1500)
        }
        
    // если нажат символ "C"
    } else if (value === 'C') {
        // очищаем поле
        result.textContent = ''
    
    // если нажат символ "СЕ" или Backspace
    } else if (value.match(/CE|Backspace/)) {
        // уменьшаем строку на один символ
        result.textContent = result.textContent.substring(0, result.textContent.length - 1)
        
    // если нажата любая другая (отфильтрованная) кнопка или клавиша
    } else {
        // записываем ее значение в поле
        result.textContent += value
    }
}