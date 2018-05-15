class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major = 'Undefined') {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        return `Student ${super.getDescription()}`;
    }
}

const me = new Student('Burak Gavas', 26, 'Computer Science');


console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

