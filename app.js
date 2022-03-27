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


let result = document.querySelector('.result');

const div = document.createElement('div')

div.classList.add('.keyboard');
document.querySelector('#calculator').appendChild(div);

// button line 'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='

'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='.split(' ').map( symbol => {
    div.insertAdjacentHTML('beforeend', `<button value=${symbol}> ${symbol} </button>`)
})