class Person {

    constructor(name, age, password) {
        this.name = name
        this.age = age

    }

    print() {
        console.log('имя - ' + this.name, ';  возраст - ' + this.age);
    }
}
let Tima = new Person('Tima', 20,)
Tima.print()


class User extends Person {
    #password;
    username;
    constructor(name, age, password, username) {
        super(name, age)
        this.username = username;
        this.#password = password;
    }
    print(password) {
        if(password === this.#password) console.log(this.name, this.age, this.username);
    }
}
let tima = new User('Tima', 20, 123, 'Timmuzy')

tima.print(123)
