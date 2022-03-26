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

