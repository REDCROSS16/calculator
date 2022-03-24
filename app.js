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
    progress: '40%'
}

let experience = function () {
    console.info(user.experience + ' months')
    console.info(+user.experience / 12 + ' years')
}

experience();

user.fullname();


class Calculator {

        
}

